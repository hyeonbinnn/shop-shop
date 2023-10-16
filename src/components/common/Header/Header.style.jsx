import styled from 'styled-components';
import search from '../../../assets/icons/icon-search.svg';
import cart from '../../../assets/icons/icon-cart.svg';
import cart2 from '../../../assets/icons/icon-cart2.svg';
import user from '../../../assets/icons/icon-user.svg';
import user2 from '../../../assets/icons/icon-user2.svg';

// Header 레이아웃
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 20px auto;
  padding: 0px 30px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin: 20px auto 30px;
  }
`;

// 로고, 검색바
export const LogoSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

// 로고
export const LogoBox = styled.div`
  width: 300px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 230px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

// 검색창
export const SearchBox = styled.div`
  margin-top: 70px;

  label {
    position: relative;

    input {
      width: 300px;
      border: ${({ theme }) => `2px solid ${theme.colors.text}`};
      border-radius: 30px;
      padding: 12px 18px;
      box-sizing: border-box;
      font-size: 15px;

      ::placeholder {
        font-weight: bold;
      }
    }

    button {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 12px;
      top: 9px;
      transform: translateY(-50%);
      background: url(${search}) center/contain no-repeat;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: 0;

    label {
      input {
        width: 200px;
        font-size: 13px;
        padding: 8px 17px;
        margin-left: 14px;
      }

      button {
        width: 25px;
        height: 25px;
        right: 9px;
        top: 10px;
      }
    }
  }
`;

// 장바구니, 로그인
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  margin: 15px 20px 0px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 10px;
    margin-top: 100px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.footerTxt};
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 3px;

    button {
      width: 28px;
      height: 28px;
    }

    span {
      font-size: 13px;
    }
  }
`;

export const UserBtn = styled.button`
  background: ${(props) =>
    props.modal === true
      ? `url(${user2}) center/contain no-repeat `
      : `url(${user}) center/contain no-repeat `};
  :active {
    background: url(${user2}) center/contain no-repeat;
  }
`;

export const CartBtn = styled.button`
  background: url(${cart}) center/contain no-repeat;
  :active {
    background: url(${cart2}) center/contain no-repeat;
  }
`;

export const SellerBtn = styled.button``;
