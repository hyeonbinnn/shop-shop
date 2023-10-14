import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './WelcomeModal.style';
import welcomeLogo from '../../assets/icons/icon-welcomeLogo.svg';
import next from '../../assets/icons/icon-next-white.svg';

const WelcomeModal = () => {
  const modalRef = useRef();

  return (
    <S.ModalContainer>
      <S.Modal>
        <S.LogoBox>
          <img src={welcomeLogo} alt="로고 아이콘" />
        </S.LogoBox>

        <S.ButtonBox>
          <Link to="/login">
            <S.LoginButton>
              <img src={next} alt="로그인하기 아이콘" />
              <span>로그인하기</span>
            </S.LoginButton>
          </Link>
          <Link to="/">
            <S.NextButton>
              <span>홈으로 가기</span>
              <img src={next} alt="둘러보기 아이콘" />
            </S.NextButton>
          </Link>
        </S.ButtonBox>
      </S.Modal>
    </S.ModalContainer>
  );
};

export default WelcomeModal;
