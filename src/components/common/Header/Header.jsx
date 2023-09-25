import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import logo from '../../../assets/icon-logo.svg';
import cart from '../../../assets/icon-cart.svg';
import user from '../../../assets/icon-user.svg';

const Header = () => {
  return (
    <S.HeaderWrap>
      <S.Container>
        <S.LogoBox>
          <Link to="/">
            <S.LogoImg src={logo} alt="쇼핑몰 로고 아이콘" />
          </Link>
        </S.LogoBox>
        <S.HeaderNav>
          <S.HeaderMenuList>
            <Link>
              <S.List>
                <S.ListBox>
                  <img src={cart} alt="장바구니 아이콘" />
                  <span>장바구니</span>
                </S.ListBox>
              </S.List>
            </Link>
            <Link>
              <S.List>
                <S.ListBox>
                  <img src={user} alt="로그인 아이콘" />
                  <span>로그인</span>
                </S.ListBox>
              </S.List>
            </Link>
          </S.HeaderMenuList>
        </S.HeaderNav>
      </S.Container>
    </S.HeaderWrap>
  );
};

export default Header;
