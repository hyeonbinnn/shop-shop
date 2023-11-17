import React from 'react';
import * as S from './Payment.style';
// import { useLocation } from 'react-router-dom';
import Header from './../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import PaymentHeader from './../../components/PaymentBox/PaymentHeader';

const Payment = () => {
  // const location = useLocation();
  // const products = location.state.products;

  return (
    <>
      <Header />
      <S.PaymentSection>
        <h1>주문/결제하기</h1>
        <PaymentHeader />
      </S.PaymentSection>
      <Footer />
    </>
  );
};

export default Payment;
