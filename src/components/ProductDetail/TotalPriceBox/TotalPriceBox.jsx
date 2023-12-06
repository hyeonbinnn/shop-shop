import React, { useState, useEffect } from 'react';
import * as S from './TotalPriceBox.style';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../../services/cookies';
import { getCartList, postAddCart } from '../../../api/cart';
import Modal from '../../common/Modal/Modal';
import { useDispatch } from 'react-redux';
import { setCarts } from '../../../redux/slices/slices';

const TotalPriceBox = ({ detail, quantity, totalPrice, loginType }) => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  console.log('product_id:', product_id);
  const token = getCookie('token');

  const dispatch = useDispatch();

  const [loginModal, setLoginModal] = useState(false);

  const addCart = async () => {
    try {
      postAddCart(token, product_id, quantity).then(() => {
        navigate('/cart');
      });
    } catch (error) {
      console.error('장바구니에 추가 중 에러 발생', error);
    }
  };

  const goToPayment = () => {
    navigate('/payment', {
      state: {
        products: [
          {
            ...detail,
            quantity,
            order_kind: 'direct_order',
          },
        ],
      },
    });
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  useEffect(() => {
    getCartList(token).then((cartData) => {
      dispatch(setCarts(cartData)); // cartData 변수에 카트 정보를 저장
    });
  }, [token, dispatch]);

  return (
    <>
      <S.Section>
        <S.TotalInfo>총 상품 금액</S.TotalInfo>
        <S.TotalPrice>
          <S.TotalQuantity>
            총 수량 <strong>{quantity}</strong>개
          </S.TotalQuantity>
          {totalPrice?.toLocaleString()}
          <S.SpanUnit>원</S.SpanUnit>
        </S.TotalPrice>
      </S.Section>
      {detail?.stock === 0 ? (
        <S.SoldOutButton disabled>품절</S.SoldOutButton>
      ) : (
        <S.ButtonBox>
          <S.BuyButton
            disabled={loginType === 'SELLER' ? true : false}
            onClick={!token ? openLoginModal : goToPayment}
          >
            바로 구매
          </S.BuyButton>
          <S.CartButton
            disabled={loginType === 'SELLER' ? true : false}
            onClick={!token ? openLoginModal : addCart}
          >
            장바구니
          </S.CartButton>
        </S.ButtonBox>
      )}
      {loginModal && (
        <Modal option="login" openModal={openLoginModal} closeModal={closeLoginModal} />
      )}
    </>
  );
};

export default TotalPriceBox;
