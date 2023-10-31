import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCookie } from '../../../services/cookies';
import { getDetailProduct } from '../../../api/product';

import Modal from '../../common/Modal/Modal';
import * as S from './CartItem.style';
import QuantityButton from './../../ProductDetail/QuantityButton/QuantityButton';

const CartItem = ({
  product_id,
  cart_item_id,
  quantity,
  is_active,
  checkedItemHandler,
  checkedArr,
}) => {
  const navigate = useNavigate();
  const loginType = getCookie('loginType');

  const [orderNum, setOrderNum] = useState(quantity);
  const [delModal, setDelModal] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const soldOut = cartItem.stock === 0;

  const openDelModal = () => {
    setDelModal(true);
  };

  const closeDelModal = () => {
    setDelModal(false);
  };

  const openQuantityModal = () => {
    setQuantityModal(true);
  };

  const closeQuantityModal = () => {
    setQuantityModal(false);
  };

  function shipping(method, fee) {
    if (method === 'DELIVERY' && fee !== 0) {
      return `택배배송 / ${fee.toLocaleString()}원`;
    } else if (method === 'PARCEL' && fee !== 0) {
      return `소포배송 / ${fee.toLocaleString()}원`;
    } else if (method === 'DELIVERY' && fee === 0) {
      return `택배배송 / 무료배송`;
    } else if (method === 'PARCEL' && fee === 0) {
      return `소포배송 / 무료배송`;
    }
  }

  const minusStock = () => {
    if (orderNum === 1) {
      alert('최수 주문 수량은 1개입니다.');
    } else if (cartItem.stock > 1 && orderNum > 0) {
      setOrderNum(orderNum - 1);
    }
  };

  const plusStock = () => {
    if (cartItem.stock > orderNum) {
      setOrderNum(orderNum + 1);
    }
  };

  const goToPayment = () => {
    navigate('/payment', {
      state: {
        products: [
          {
            ...cartItem,
            quantity,
            order_kind: 'cart_one_order',
          },
        ],
      },
    });
  };

  useEffect(() => {
    async function getCart() {
      const cartDetail = getDetailProduct(product_id).then((detail) => {
        setCartItem(detail);
      });
      return cartDetail;
    }

    getCart();
  }, [quantity, product_id]);

  return (
    <>
      <S.ItemContainer>
        <input
          type="checkbox"
          checked={
            !soldOut && checkedArr.map((el) => el.product_id).includes(cartItem.product_id)
              ? true
              : false
          }
          onChange={(e) => checkedItemHandler(e.target.checked, cartItem, cartItem.product_id)}
          disabled={soldOut}
        />

        <S.ItemInfoBox>
          <img
            src={cartItem.image}
            alt={cartItem.product_name}
            onClick={() => navigate(`/productDetail/${product_id}`)}
          />
          <S.ItemInfo>
            <span>{cartItem.store_name}</span>
            <strong>{cartItem.product_name}</strong>
            <span>{cartItem.price?.toLocaleString()}원</span>
            <p>{shipping(cartItem.shipping_method, cartItem.shipping_fee)}</p>
          </S.ItemInfo>
        </S.ItemInfoBox>

        <S.Custom>
          <QuantityButton
            orderNum={orderNum}
            minusStock={openQuantityModal}
            plusStock={openQuantityModal}
            loginType={loginType}
            soldOut={soldOut}
          />
        </S.Custom>

        <S.ItemPrice>
          <p>{(cartItem.price * quantity)?.toLocaleString()}원</p>
          <S.BuyButton onClick={goToPayment} disabled={soldOut}>
            {soldOut ? '품절' : '주문하기'}
          </S.BuyButton>
          <S.DeleteButton onClick={openDelModal} />
        </S.ItemPrice>
      </S.ItemContainer>

      {delModal && (
        <Modal
          option="delete"
          cartId={cart_item_id}
          openModal={openDelModal}
          closeModal={closeDelModal}
        />
      )}
      {quantityModal && (
        <Modal
          option="quantity"
          productId={product_id}
          cartId={cart_item_id}
          active={is_active}
          orderNum={orderNum}
          minusStock={minusStock}
          plusStock={plusStock}
          openModal={openQuantityModal}
          closeModal={closeQuantityModal}
          loginType={loginType}
        />
      )}
    </>
  );
};

export default CartItem;
