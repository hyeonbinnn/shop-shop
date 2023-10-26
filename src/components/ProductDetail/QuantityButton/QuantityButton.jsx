import React from 'react';
import { useLocation } from 'react-router-dom';
import TotalPrice from '../TotalPrice/TotalPrice';
import * as S from './QuantityButton.style';

const QuantityButton = ({
  totalPrice,
  orderNum,
  minusStock,
  plusStock,
  detail,
  loginType,
  soldOut,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      <S.Fieldset>
        <legend className="a11y-hidden">수량 선택</legend>
        <S.MinusButton onClick={() => loginType === 'BUYER' && minusStock()} disabled={soldOut} />
        <span>{orderNum}</span>
        <S.PlusButton onClick={() => loginType === 'BUYER' && plusStock()} disabled={soldOut} />
      </S.Fieldset>
      {pathname === '/cart' ? null : (
        <TotalPrice
          detail={detail}
          quantity={orderNum}
          totalPrice={totalPrice}
          loginType={loginType}
        />
      )}
    </>
  );
};

export default QuantityButton;
