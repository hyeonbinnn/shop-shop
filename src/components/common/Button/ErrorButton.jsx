import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ErrorButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ButtonBox>
      <Link to="/">
        <MainBtn>
          <span>메인 페이지</span>
        </MainBtn>
      </Link>
      <PrevBtn onClick={goBack}>
        <span>이전 페이지</span>
      </PrevBtn>
    </ButtonBox>
  );
};

export default ErrorButton;

const commonButton = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 150px;
  padding: 15px 20px;
  border-radius: 5px;
`;

const commonText = `
  font-size: 16px;
  font-weight: bold;
`;

const commonMediaQuery = css`
  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 100px;
    padding: 12px 12px;

    span {
      font-size: 13px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 20px;
`;

const PrevBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  ${commonButton}

  span {
    ${commonText}
  }
  ${commonMediaQuery}
`;

const MainBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  ${commonButton}

  span {
    ${commonText}
  }
  ${commonMediaQuery}
`;
