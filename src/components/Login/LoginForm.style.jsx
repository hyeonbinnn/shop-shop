import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px 20px;
  text-algin: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
  width: 350px;
  margin: 30px auto;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 300px;
  }
`;

export const Main = styled.main`
  width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 400px;
  }
`;

export const LoginTab = styled.ul``;

export const LoginTabList = styled.li`
  display: inline-block;
  width: 50%;
  padding: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  font-size: 17px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${({ theme, isSelected }) =>
    isSelected === true ? theme.colors.white : theme.colors.lightGray};
  cursor: pointer;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 15px;
    font-size: 15px;
  }
`;

export const LoginForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 40px;
  gap: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  p {
    color: ${({ theme }) => theme.colors.error};
    margin-top: -7px;
    font-size: 13px;
    margin-left: 8px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
    p {
      margin-top: -9px;
    }
  }
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 20px 10px;
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  font-weight: bold;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 15px 10px;
  }
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
