import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../../../assets/icon-cart.svg';

const CartButton = () => {
  return (
    <CartContainer>
      <Link to="/cart">
        <LinkBtn>
          <img src={cart} alt="" 장바구니 아이콘 />
        </LinkBtn>
      </Link>
    </CartContainer>
  );
};

export default CartButton;

const CartContainer = styled.div`
  position: relative;
`;

const LinkBtn = styled.button`
  position: fixed;
  right: 50px;
  top: 40px;
  border-radius: 50%;
  z-index: 2;

  img {
    width: 70px;
    height: 70px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    right: 20px;
    top: 20px;

    img {
      width: 50px;
      height: 50px;
    }
  }
`;
