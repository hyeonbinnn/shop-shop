import React from 'react';
import styled from 'styled-components';

const CartItemEmpty = () => {
  return (
    <Container>
      <strong>장바구니에 담긴 상품이 없습니다.</strong>
      <p>원하는 상품을 장바구니에 담아 보세요!</p>
    </Container>
  );
};

export default CartItemEmpty;

const Container = styled.div`
  padding: 150px 0px;

  strong {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.lightGrayText};
    font-weight: bold;
  }
`;
