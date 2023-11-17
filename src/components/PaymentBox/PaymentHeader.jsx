import React from 'react';
import styled from 'styled-components';

const PaymentHeader = () => {
  return (
    <Container>
      <span>상품정보</span>
      <span>할인</span>
      <span>배송비</span>
      <span>주문금액</span>
    </Container>
  );
};

export default PaymentHeader;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
  padding: 19px 0px 19px 90px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;

  span {
    font-size: 17px;
    font-weight: bold;

    :nth-child(2),
    :nth-child(3) {
      margin-left: 140px;
      margin-right: -140px;
    }
    :last-child {
      margin-left: 140px;
    }
  }
`;
