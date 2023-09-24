import styled from 'styled-components';

// Header 레이아웃
export const HeaderWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.third}`};
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
export const HeaderMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 40px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 15px;
  }
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
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 7px;
    }

    span {
      font-weight: bold;
    }
  }
`;
