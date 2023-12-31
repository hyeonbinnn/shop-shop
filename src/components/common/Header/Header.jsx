import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getSearchProduct } from '../../../api/product';
import { getCookie } from '../../../services/cookies';
import * as S from './Header.style';
import logo from '../../../assets/icons/icon-logo.webp';
import DropDown from './../../DropDown/DropDown';

const Header = () => {
  const token = getCookie('token');
  const loginType = getCookie('loginType');

  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const onClickSearch = async () => {
    const searchResults = await getSearchProduct(searchText);
    navigate('/search', {
      state: searchResults,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  const renderCartAndLogin = () => {
    if (token) {
      return (
        <Link to="/cart">
          <S.MenuBox>
            <S.CartBtn
              aria-label="cart button"
              active={location.pathname === '/cart'}
              type="button"
            />
            <S.CartSpan active={location.pathname === '/cart'} type="button">
              장바구니
            </S.CartSpan>
          </S.MenuBox>
        </Link>
      );
    } else {
      return (
        <Link to="/login">
          <S.MenuBox>
            <S.CartBtn type="button" aria-label="cart button" />
            <span>장바구니</span>
          </S.MenuBox>
        </Link>
      );
    }
  };

  const renderUserAndLogin = () => {
    if (token) {
      return (
        <S.MenuBox modal={isOpen}>
          <S.UserBtn
            onClick={toggleMenu}
            modal={isOpen}
            type="button"
            aria-label="my page button"
          />
          <span>마이페이지</span>
          {isOpen && <DropDown />}
        </S.MenuBox>
      );
    } else {
      return (
        <Link to="/login">
          <S.MenuBox>
            <S.UserBtn type="button" aria-label="login button" />
            <span>로그인</span>
          </S.MenuBox>
        </Link>
      );
    }
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <S.LogoSearchBox>
          <S.LogoBox>
            <Link to="/">
              <S.LogoImg src={logo} alt="쇼핑몰 로고 아이콘" />
            </Link>
          </S.LogoBox>
          <S.SearchBox>
            <label htmlFor="search">
              <input
                id="search"
                type="text"
                placeholder="상품을 검색해 보세요!"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
              <button onClick={onClickSearch} aria-label="search button">
                <span className="a11y-hidden">검색 버튼</span>
              </button>
            </label>
          </S.SearchBox>
        </S.LogoSearchBox>

        {loginType === 'SELLER' ? (
          <S.MenuWrap>
            <S.MenuBox modal={isOpen}>
              <S.UserBtn
                onClick={toggleMenu}
                modal={isOpen}
                type="button"
                aria-label="my page button"
              />
              <span>마이페이지</span>
              {isOpen && <DropDown />}
            </S.MenuBox>
            <Link to="/sellerCenter">
              <S.SellerBtn type="button" aria-label="seller center button">
                판매자 센터
              </S.SellerBtn>
            </Link>
          </S.MenuWrap>
        ) : (
          <S.MenuWrap>
            {renderCartAndLogin()}
            {renderUserAndLogin()}
          </S.MenuWrap>
        )}
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
};

export default Header;
