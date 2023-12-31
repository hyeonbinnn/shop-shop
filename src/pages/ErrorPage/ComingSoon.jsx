import React from 'react';
import styled from 'styled-components';
import comingSoonBg from '../../assets/images/comingSoonBg.webp';
import comingSoonLogo from '../../assets/images/comingSoonLogo.webp';
import ErrorButton from '../../components/common/Button/ErrorButton';
import {
  commonErrorContainer,
  commonErrorLogoBox,
  commonErrorWrap,
} from '../../styles/CommonStyle';

const ComingSoon = () => {
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
        <ErrorButton />
      </Wrap>
    </Container>
  );
};

export default ComingSoon;

const Container = styled.div`
  ${commonErrorContainer}
  background: url(${comingSoonBg}) center/cover no-repeat;
`;

const Wrap = styled.div`
  ${commonErrorWrap}
`;

const LogoBox = styled.div`
  ${commonErrorLogoBox}

  span {
    font-size: 18px;
    margin-top: -15px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    span {
      font-size: 17px;
    }
  }
`;
