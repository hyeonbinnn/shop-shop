import styled from 'styled-components';

// Footer 레이아웃
export const FooterWrap = styled.footer`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding: 10px 0px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.third}`};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px 30px;
  }
`;

// 왼쪽바
export const FooterNav = styled.nav`
  padding: 30px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;

export const FooterMenuList = styled.ul`
  display: flex;
  gap: 20px;

  li {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const List = styled.li``;

// 오른쪽 소셜바
export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SocialList = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
`;

export const SocialLink = styled.a`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;
