import styled from 'styled-components';
import {
  CommonContainer,
  CommonForm,
  CommonHeader,
  CommonMain,
  CommonTabList,
} from '../../styles/CommonStyle';

export const Container = styled(CommonContainer)``;

export const Header = styled(CommonHeader)``;

export const Main = styled(CommonMain)``;

export const LoginTab = styled.ul``;

export const LoginTabList = styled(CommonTabList)``;

export const LoginForm = styled(CommonForm)`
  gap: 20px;

  p {
    color: ${({ theme }) => theme.colors.error};
    margin-top: -10px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 15px 5px;
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  font-weight: bold;
`;

export const LoginButton = styled.button`
  padding: 18px 0px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  font-weight: bold;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 15px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 0 auto;
  gap: 10px;

  span {
    color: ${({ theme }) => theme.colors.footerTxt};
    font-weight: bold;
    font-size: 15px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 5px;

    span {
      font-size: 13px;
    }
  }
`;

export const goToSignUp = styled.span`
  position: relative;

  &:after {
    content: '|';
    position: absolute;
    margin-left: 12px;
    bottom: 0.5px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    &:after {
      margin-left: 16px;
      bottom: -0.8px;
    }
  }
`;
