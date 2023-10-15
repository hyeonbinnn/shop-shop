import styled, { css } from 'styled-components';

// LoginForm, SignUpForm 공통 스타일
export const CommonContainer = styled.section`
  padding: 30px 20px;
  text-algin: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px 0px;
  }
`;

export const CommonHeader = styled.header`
  width: 350px;
  margin: 30px auto;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 300px;
  }
`;

export const CommonMain = styled.main`
  width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 400px;
  }
`;

export const CommonTabList = styled.li`
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

export const CommonForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 40px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  p {
    font-size: 13px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    p {
      margin-top: -9px;
    }
  }
`;

// Error404, ComingSoon 공통 스타일
export const commonErrorContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const commonErrorWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 40px;
  }
`;

export const commonErrorLogoBox = css`
  width: 800px;
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    line-height: 30px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 460px;

    span {
      line-height: 27px;
    }
  }
`;
