import React, { useState, useEffect } from 'react';
import * as S from './TotalPrice.style';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../../services/cookies';
import { getCartList, postAddCart } from '../../../api/cart';
import Modal from '../../common/Modal/Modal';

const TotalPrice = ({ detail, quantity, totalPrice, loginType }) => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const token = getCookie('token');

  const [loginModal, setLoginModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [cart, setCart] = useState([]);

  const addCart = () => {
    postAddCart(token, product_id, quantity).then(navigate('/cart'));
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
    setLoginModal(true);
  };

  const openCartModal = () => {
    setCartModal(true);
  };

  const closeCartModal = () => {
    setCartModal(false);
  };

  useEffect(() => {
    getCartList(token);
  }, [token]);

  const isCart = cart?.filter((i) => i.product_id === product_id);

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
            onClick={!token ? openLoginModal : isCart.length > 0 ? openCartModal : goToPayment}
          >
            바로 구매
          </S.BuyButton>
          <S.CartButton
            disabled={loginType === 'SELLER' ? true : false}
            onClick={!token ? openLoginModal : isCart.length > 0 ? openCartModal : addCart}
          >
            장바구니
          </S.CartButton>
        </S.ButtonBox>
      )}
      {loginModal && (
        <Modal option="login" openModal={openLoginModal} closeModal={closeLoginModal} />
      )}
      {cartModal && <Modal option="cart" openModal={openCartModal} closeModal={closeCartModal} />}
    </>
  );
};

export default TotalPrice;
