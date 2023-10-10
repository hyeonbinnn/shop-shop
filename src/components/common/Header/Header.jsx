import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import cart from '../../../assets/icons/icon-cart.svg';
import user from '../../../assets/icons/icon-user.svg';
import logo from '../../../assets/icons/icon-logo.svg';
import search from '../../../assets/icons/icon-search.svg';

const Header = () => {
  return (
    <S.HeaderWrap>
      <S.Container>
        <S.LogoSearchBox>
          <S.LogoBox>
            <Link to="/">
              <S.LogoImg src={logo} alt="쇼핑몰 로고 아이콘" />
            </Link>
          </S.LogoBox>
          <S.SearchBox>
            <input type="text" placeholder="상품을 검색해주세요" />
            <img src={search} alt="검색 아이콘" />
          </S.SearchBox>
        </S.LogoSearchBox>
        <S.HeaderNav>
          <S.HeaderMenuList>
            <Link to="/cart">
              <S.List>
                <S.ListBox>
                  <img src={cart} alt="장바구니 아이콘" />
                  <span>장바구니</span>
                </S.ListBox>
              </S.List>
            </Link>
            <Link to="/Login">
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
