import React from 'react';
import * as S from './Payment.style';
import { useLocation } from 'react-router-dom';
import Header from './../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import PaymentHeader from './../../components/PaymentBox/PaymentHeader';
import PaymentItem from '../../components/PaymentBox/PaymentItem';

const Payment = () => {
  const location = useLocation();
  const products = location.state.products;

  const priceArr = products.map((i) => i.price * i.quantity);
  const feeArr = products.map((i) => i.shipping_fee);

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr);
  const totalFee = total(feeArr);
  const totalPay = totalPrice + totalFee;

  return (
    <>
      <Header />
      <S.PaymentSection>
        <S.Container>
          <h1>주문/결제하기</h1>
          <PaymentHeader />
          {products?.map((item) => (
            <PaymentItem key={item.product_id} {...item} />
          ))}
          <S.TotalPrice>
            총 주문금액 <strong>{totalPay?.toLocaleString()}원</strong>
          </S.TotalPrice>
        </S.Container>
      </S.PaymentSection>
      <Footer />
    </>
  );
};

export default Payment;
