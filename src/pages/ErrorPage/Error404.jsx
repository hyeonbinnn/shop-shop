import React from 'react';
import styled from 'styled-components';
import errorBg from '../../assets/images/errorBg.svg';
import errorLogo from '../../assets/images/errorLogo.svg';
import ErrorButton from '../../components/common/Button/ErrorButton';
import {
  commonErrorContainer,
  commonErrorLogoBox,
  commonErrorWrap,
} from '../../styles/CommonStyle';

const Error404 = () => {
  return (
    <Container>
      <Wrap>
        <LogoBox>
          <img src={errorLogo} alt="에러 페이지 이미지" />
          <strong>죄송합니다. 페이지를 찾을 수 없습니다.</strong>
          <span>
            존재하지 않는 주소를 입력하셨거나
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 <br />
            일시적으로 사용할 수 없습니다.
          </span>
        </LogoBox>
        <ErrorButton />
      </Wrap>
    </Container>
  );
};

export default Error404;

const Container = styled.div`
  ${commonErrorContainer}
  background: url(${errorBg}) center/cover no-repeat;
`;

const Wrap = styled.div`
  gap: 70px;
  ${commonErrorWrap}
`;

const LogoBox = styled.div`
  ${commonErrorLogoBox}
  gap: 10px;

  img {
    margin-top: -30px;
  }

  strong {
    font-size: 24px;
    margin-bottom: 30px;
  }

  span {
    font-size: 20px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 460px;

    strong {
      font-size: 20px;
      margin-bottom: 10px;
    }

    span {
      font-size: 16px;
    }
  }
`;
