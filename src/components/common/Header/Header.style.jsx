import styled from 'styled-components';

// Header 레이아웃
export const HeaderWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

// 로고
export const LogoBox = styled.div`
  width: 400px;
  margin: 10px 0px -5px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 320px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

// 장바구니, 로그인
export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
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
