import React from 'react';
import * as S from './TotalPrice.style';
import minusIcon from '../../../assets/icons/icon-minus-line.svg';
import plusIcon from '../../../assets/icons/icon-plus-line.svg';

const TotalPrice = ({ totalPrice, totalFee, totalPay }) => {
  return (
    <S.Container>
      <S.PriceBox>
        <span>총 상품 금액</span>
        <strong>
          {totalPrice.toLocaleString()}
          <span>원</span>
        </strong>
      </S.PriceBox>
      <img src={minusIcon} alt="빼기 아이콘" />
      <S.PriceBox>
        <span>상품 할인</span>
        <strong>
          0<span>원</span>
        </strong>
      </S.PriceBox>
      <img src={plusIcon} alt="더하기 아이콘" />
      <S.PriceBox>
        <span>배송비</span>
        <strong>
          {totalFee.toLocaleString()}
          <span>원</span>
        </strong>
      </S.PriceBox>
      <S.TotalBox>
        <span>결제 예정 금액</span>
        <strong>
          {totalPay.toLocaleString()} <span>원</span>
        </strong>
      </S.TotalBox>
    </S.Container>
  );
};

export default TotalPrice;
