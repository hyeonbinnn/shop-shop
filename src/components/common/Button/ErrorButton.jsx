import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import next from '../../../assets/icons/icon-next-white.svg';

const ErrorButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ButtonBox>
      <PrevBtn onClick={goBack}>
        <img src={next} alt="이전으로 가는 화살표 아이콘" />
        <span>이전 페이지</span>
      </PrevBtn>
      <Link to="/">
        <NextBtn>
          <span>메인 페이지</span>
          <img src={next} alt="다음으로 가는 화살표 아이콘" />
        </NextBtn>
      </Link>
    </ButtonBox>
  );
};

export default ErrorButton;

const commonButton = ({ theme }) => `
  display: flex;
  align-items: center;
  gap: 8px;
  background-color:${theme.colors.black};
  padding: 15px 20px;
  border-radius: 15px;
`;

const commonText = ({ theme }) => `
  font-size: 16px;
  font-weight: bold;
  color:${theme.colors.white};
`;

const commonImage = `
  width: 18px;
  height: 18px;
`;

const commonMediaQuery = css`
  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 12px 14px;

    span {
      font-size: 14px;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 0px 20px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 30px;
  }
`;

const PrevBtn = styled.button`
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

const NextBtn = styled.button`
  ${commonButton}
  span {
    ${commonText}
  }
  img {
    ${commonImage}
  }
  ${commonMediaQuery}
`;
