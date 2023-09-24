import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../../../assets/icon-cart.svg';
import user from '../../../assets/icon-user.svg';

const Header = () => {
  return (
    <LogoHeader>
      <LogoBox>
        <Link to="/">{/* <LinkImg src={logo} alt="쇼핑몰 로고" /> */}</Link>
      </LogoBox>
      <TopBar>
        <BarList>
          <Link>
            <ListBox>
              <img src={cart} alt="장바구니 아이콘" />
              <span>장바구니</span>
            </ListBox>
          </Link>
        </BarList>
        <BarList>
          <Link>
            <ListBox>
              <img src={user} alt="로그인 아이콘" />
              <span>로그인</span>
            </ListBox>
          </Link>
        </BarList>
      </TopBar>
    </LogoHeader>
  );
};

export default Header;

const LogoHeader = styled.header`
  display: flex;
`;

// 로고
const LogoBox = styled.div`
  width: 300px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
  }
`;

const LinkImg = styled.img`
  width: 100%;
  height: 100%;
`;

// 장바구니, 로그인
const TopBar = styled.ul`
  display: flex;
  gap: 20px;
`;

const BarList = styled.li`
  display: flex;
  align-items: center;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 30px;
    margin-bottom: 5px;
  }

  span {
    font-weight: bold;
  }
`;
