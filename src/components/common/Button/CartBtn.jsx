import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartBtn = () => {
  return (
    <Link>
      <LinkBtn />
    </Link>
  );
};

export default CartBtn;

const LinkBtn = styled.button`
  position: sticky;
  top: 60px;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary}
  border-radius: 50%;
  background: url('../../../assets/icon-shopping-cart-white.svg'
) no-repeat center / 40px 40px;
`;
