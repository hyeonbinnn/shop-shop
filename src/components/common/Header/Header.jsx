import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/icon-logo.svg';

const Header = () => {
  return (
    <LogoHeader>
      <Link to="/">
        <LinkImg src={logo} alt="쇼핑몰 로고" />
      </Link>
    </LogoHeader>
  );
};

export default Header;

const LogoHeader = styled.header`
  width: 650px;
  height: 300px;
  margin: 40px auto;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    max-width: 375px;
    height: 200px;
  }
`;

const LinkImg = styled.img`
  width: 100%;
  height: 100%;
`;
