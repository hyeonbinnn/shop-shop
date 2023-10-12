import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './SignUpForm.style';
import logo from '../../assets/icons/icon-logo.svg';

const SignUpForm = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <S.Container>
      <h1 className="a11y-hidden">회원가입 페이지</h1>

      <S.Header>
        <Link to="/">
          <img src={logo} alt="숍숍 로고 이미지" />
        </Link>
      </S.Header>

      <S.Main>
        <S.SignUpTab>
          <S.SignUpTabList
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(true);
            }}
          >
            구매회원가입
          </S.SignUpTabList>
          <S.SignUpTabList
            isSelected={!isSelected}
            onClick={() => {
              setIsSelected(false);
            }}
          >
            판매회원가입
          </S.SignUpTabList>
        </S.SignUpTab>

        <S.SignUpForm>
          <S.Section>
            <S.Label htmlFor="">아이디</S.Label>
            <S.DoubleCheckBox>
              <S.Input />
              <button>중복확인</button>
            </S.DoubleCheckBox>

            <S.Label htmlFor="">비밀번호</S.Label>
            <S.Input />

            <S.Label htmlFor="">비밀번호 재확인</S.Label>
            <S.Input />
          </S.Section>

          <S.Section>
            <S.Label htmlFor="">이름</S.Label>
            <S.Input />

            <S.Label htmlFor="">휴대폰번호</S.Label>
            <S.Input />
          </S.Section>

          <S.Section>
            <S.Label htmlFor="">사업자등록번호</S.Label>
            <S.DoubleCheckBox>
              <S.Input />
              <button>인증</button>
            </S.DoubleCheckBox>

            <S.Label htmlFor="">스토어 이름</S.Label>
            <S.Input />
          </S.Section>
        </S.SignUpForm>
      </S.Main>

      <S.CheckBox>
        <label />
        <input />
        <span>
          SHOPSHOP <strong>이용약관</strong> 및 <strong>개인정보처리방침</strong>에 대한 내용을
          확인하였고 동의합니다.
        </span>
      </S.CheckBox>
      <S.SignUpButton>가입하기</S.SignUpButton>
    </S.Container>
  );
};

export default SignUpForm;
