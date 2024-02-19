import styled from 'styled-components';

// Footer 레이아웃
export const FooterWrap = styled.footer`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 50px 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 100%;
    height: 330px;
    padding: 50px 30px;
  }
`;

// Footer 상단
export const FooterBox1 = styled.div`
  max-width: 1280px;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 25px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
      display: none;
    }
  }
`;

// 왼쪽바
export const FooterMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-bottom: 30px;
  }
`;

export const List = styled.li`
  button {
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
  }
`;

// 오른쪽 소셜바
export const FooterSocialList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SocialList = styled.li``;

export const SocialLink = styled.a`
  img {
    width: 40px;
    height: 40px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

// Footer 하단
export const FooterBox2 = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 25px;
  color: ${({ theme }) => theme.colors.lightGrayText};

  strong {
    display: block;
    padding: 10px 0px;
    font-size: 15px;
  }

  span {
    display: block;
    margin-bottom: 5px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    text-align: center;
    padding-top: 0px;
  }
`;
