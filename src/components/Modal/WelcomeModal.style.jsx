import styled, { css } from 'styled-components';
import welcomeBg from '../../assets/images/welcomeBg.svg';

export const commonButton = `
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const commonText = ({ theme }) => `
  font-size: 15px;
  font-weight: bold;
  color:${theme.colors.white};
`;

export const commonImage = `
  width: 18px;
  height: 18px;
`;

export const commonMediaQuery = css`
  @media ${(props) => props.theme.mediaQuery.mobile} {
    span {
      font-size: 14px;
    }
    img {
      width: 17px;
      height: 17px;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: relative;
  width: 40%;
  min-width: 400px;
  background: url(${welcomeBg}) center/contain repeat;
  height: 300px;
  border-radius: 10px;
  border: ${({ theme }) => `3px solid ${theme.colors.black}`};
  overflow: hidden;
  z-index: 1;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 470px;
    margin-top: -20px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    img {
      width: 380px;
      height: 250px;
      margin-top: 20px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 17px;
  margin-top: -60px;
  background-color: ${({ theme }) => theme.colors.black};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: -20px;
  }
`;

export const LoginButton = styled.button`
  ${commonButton}

  span {
    ${commonText}
  }

  img {
    ${commonImage}
    transform: rotate(180deg);
  }

  ${commonMediaQuery}
`;

export const NextButton = styled.button`
  ${commonButton}

  span {
    ${commonText}
  }

  img {
    ${commonImage}
  }

  ${commonMediaQuery}
`;
