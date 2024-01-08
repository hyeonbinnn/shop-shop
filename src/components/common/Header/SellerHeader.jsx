import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/icon-logo.webp';
import { HeaderContainer, HeaderWrap } from './Header.style';

const SellerHeader = () => {
  return (
    <SellerHeaderContainer>
      <SellerHeaderWrap>
        <Link to="/">
          <LogoImg src={logo} alt="로고 아이콘" />
        </Link>
        <LogoTitle>판매자 센터</LogoTitle>
      </SellerHeaderWrap>
    </SellerHeaderContainer>
  );
};

export default SellerHeader;

const SellerHeaderContainer = styled(HeaderContainer)`
  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 20px 30px;
  }
`;

const SellerHeaderWrap = styled(HeaderWrap)`
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

const LogoImg = styled.img`
  width: 230px;
`;

const LogoTitle = styled.h1`
  font-size: 28px;
`;
