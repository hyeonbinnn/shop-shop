import React from 'react';
import styled from 'styled-components';

const CartItemHeader = ({ checkedAllHandler }) => {
  return (
    <Container>
      <input
        id="allCheckBox"
        type="checkbox"
        onChange={(e) => checkedAllHandler(e.target.checked)}
      />
      <span>상품정보</span>
      <Quantity>수량</Quantity>
      <span>상품금액</span>
    </Container>
  );
};

export default CartItemHeader;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 19px 140px 19px 30px;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;

  span {
    font-size: 17px;
    font-weight: bold;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    background-color: ${({ theme }) => theme.colors.white};
    appearance: none;

    &:checked {
      ::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: ${({ theme }) => `2px solid ${theme.colors.white}`};
        background-color: ${({ theme }) => theme.colors.secondary};
        appearance: none;
        box-sizing: border-box;
      }
    }
  }
`;

export const Quantity = styled.span`
  margin: 0 -50px 0 50px;
`;
