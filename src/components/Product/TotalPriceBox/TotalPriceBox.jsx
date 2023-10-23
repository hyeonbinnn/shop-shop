import React from 'react';
import * as S from './TotalPriceBox.style';

const TotalPriceBox = ({ detail, quantity, totalPrice, loginType }) => {
  return (
    <S.Section>
      <S.TotalInfo>총 상품 금액</S.TotalInfo>
      <S.TotalPrice>
        <S.TotalQuantity>
          총 수량 <strong>{quantity}</strong>개
        </S.TotalQuantity>
        {totalPrice?.toLocaleString()}
        <span>원</span>
      </S.TotalPrice>
    </S.Section>
  );
};

export default TotalPriceBox;
