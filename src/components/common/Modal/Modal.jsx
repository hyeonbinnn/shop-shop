import React from 'react';
import * as S from './Modal.style';
import { Link } from 'react-router-dom';

import { getCookie } from '../../../services/cookies';
import { putEditQuantityCart, deleteCartItem } from '../../../api/cart';
import { deleteProduct } from '../../../api/product';

import QuantityButton from '../../ProductDetail/QuantityButton/QuantityButton';

const Modal = ({
  option,
  productId,
  cartId,
  active,
  orderNum,
  minusStock,
  plusStock,
  openModal,
  closeModal,
  loginType,
}) => {
  const token = getCookie('token');

  const editBtn = async () => {
    putEditQuantityCart(token, cartId, productId, orderNum, active);
  };

  const deleteBtn = async () => {
    if (cartId) {
      deleteCartItem(token, cartId);
    } else if (productId) {
      deleteProduct(token, productId);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const preventOutsideClick = (e) => {
    e.preventDefault();
  };

  return (
    <S.ModalBg onClick={preventOutsideClick}>
      {openModal && (
        <S.Container onClick={handleModalClick}>
          {option === 'quantity' ? (
            <S.Custom>
              <QuantityButton
                orderNum={orderNum}
                minusStock={minusStock}
                plusStock={plusStock}
                loginType={loginType}
              />
            </S.Custom>
          ) : null}

          {option === 'delete' ? (
            <S.Question>상품을 삭제하시겠습니까?</S.Question>
          ) : option === 'login' ? (
            <S.Question>
              로그인이 필요한 서비스입니다.
              <br /> 로그인 하시겠습니까?
            </S.Question>
          ) : null}

          <S.AnswerBox>
            {option === 'delete' || option === 'quantity' ? (
              <S.FirstBtn onClick={closeModal}>취소</S.FirstBtn>
            ) : option === 'login' ? (
              <S.FirstBtn onClick={closeModal}>아니오</S.FirstBtn>
            ) : null}
            {option === 'delete' ? (
              <S.SecondeBtn onClick={deleteBtn}>확인</S.SecondeBtn>
            ) : option === 'quantity' ? (
              <S.SecondeBtn onClick={editBtn}>수정</S.SecondeBtn>
            ) : option === 'login' ? (
              <Link to="/login">
                <S.SecondeBtn>예</S.SecondeBtn>
              </Link>
            ) : null}
          </S.AnswerBox>
          <S.DeleteBtn onClick={closeModal} />
        </S.Container>
      )}
    </S.ModalBg>
  );
};

export default Modal;
