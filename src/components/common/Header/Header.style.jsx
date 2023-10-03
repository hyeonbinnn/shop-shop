import styled from 'styled-components';

// Header 레이아웃
export const HeaderWrap = styled.div`
  max-width: 1280px;
  margin: 20px auto;
  padding: 0px 30px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin: 20px auto 30px;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

// 로고, 검색바
export const LogoSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

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
  position: relative;
  margin-top: 70px;

  input {
    width: 300px;
    height: 40px;
    border: ${({ theme }) => `2px solid ${theme.colors.text}`};
    border-radius: 30px;
    padding: 10px 0px 10px 15px;
  }

  img {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    top: 20px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: 0;

    input {
      width: 200px;
      height: 30px;
      font-size: 12px;
      padding: 3px 0px 5px 15px;
      margin-left: 13px;
    }

    img {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 25px;
      top: 15px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
`;

// 장바구니, 로그인
export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: 100px;
  }
`;

export const HeaderMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const List = styled.li``;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
  }

  span {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 3px;
    }

    span {
      font-weight: bold;
      font-size: 13px;
    }
  }
`;
