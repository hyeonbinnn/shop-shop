import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import comingSoonBg from '../../assets/images/comingSoonBg.svg';
import comingSoonLogo from '../../assets/images/comingSoonLogo.svg';
import next from '../../assets/icons/icon-next-white.svg';

const ComingSoon = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Wrap>
        <LogoBox>
          <img src={comingSoonLogo} alt="커밍순 로고 이미지" />
          <span>
            기능을 업데이트중입니다. <br />
            빠른 시일 내에 찾아뵙도록 하겠습니다. <br />
            감사합니다 🖤
          </span>
        </LogoBox>
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
      </Wrap>
    </Container>
  );
};

export default ComingSoon;

export const commonButton = ({ theme }) => `
  display: flex;
  align-items: center;
  gap: 8px;
  background-color:${theme.colors.black};
  padding: 15px 20px;
  border-radius: 15px;
`;

export const commonText = ({ theme }) => `
  font-size: 16px;
  font-weight: bold;
  color:${theme.colors.white};
`;

export const commonImage = `
  width: 18px;
  height: 18px;
`;

export const commonMediaQuery = css`
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

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${comingSoonBg}) center/cover no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 60px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 40px;
  }
`;

const LogoBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 430px;

    span {
      font-size: 17px;
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
