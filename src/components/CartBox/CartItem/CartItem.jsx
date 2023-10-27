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
      setOrderNum(parseInt(orderNum - 1));
    }
  };

  const plusStock = () => {
    if (cartItem.stock > orderNum) {
      setOrderNum(parseInt(orderNum + 1));
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
        <img
          src={cartItem.image}
          alt={cartItem.product_name}
          onClick={() => navigate(`/productDetail/${product_id}`)}
        />
        <S.DeleteButton onClick={openDelModal} />
        <S.ItemInfo>
          <span>{cartItem.store_name}</span>
          <strong>{cartItem.product_name}</strong>
          <span>{cartItem.price?.toLocaleString()}원</span>
          <span>{shipping(cartItem.shipping_method, cartItem.shipping_fee)}</span>
        </S.ItemInfo>
        <QuantityButton
          orderNum={orderNum}
          minusStock={minusStock}
          plusStock={plusStock}
          loginType={loginType}
          soldOut={soldOut}
        />
        <S.ItemPrice>
          <span>{(cartItem.price * quantity)?.toLocaleString()}원</span>
          <button onClick={goToPayment} disabled={soldOut}>
            {soldOut ? '품절' : '주문하기'}
          </button>
        </S.ItemPrice>
      </S.ItemContainer>

      {delModal && (
        <Modal
          option="delete"
          cartId="cart_item_id"
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
