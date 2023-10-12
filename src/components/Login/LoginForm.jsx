import React, { useState } from 'react';
import * as S from './LoginForm.style';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../auth/useAuth';
import logo from '../../assets/icons/icon-logo.svg';

const LoginForm = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(true);
  const [loginType, setLoginType] = useState('BUYER');

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    setError,
    reset,
  } = useForm({ mode: 'onBlur' });

  const goToHome = () => {
    navigate('/');
  };

  const onSubmit = handleSubmit((data) => {
    loginUser(data, loginType, setError, reset, goToHome);
  });

  return (
    <S.Container>
      <h1 className="a11y-hidden">로그인 페이지</h1>

      <S.Header>
        <Link to="/">
          <img src={logo} alt="숍숍 로고 이미지" />
        </Link>
      </S.Header>

      <S.Main>
        <S.LoginTab>
          <S.LoginTabList
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(true);
              setLoginType('BUYER');
            }}
          >
            구매회원 로그인
          </S.LoginTabList>
          <S.LoginTabList
            isSelected={!isSelected}
            onClick={() => {
              setIsSelected(false);
              setLoginType('SELLER');
            }}
          >
            판매회원 로그인
          </S.LoginTabList>
        </S.LoginTab>

        <S.LoginForm onSubmit={onSubmit}>
          <S.Label htmlFor="id" className="a11y-hidden">
            아이디
          </S.Label>
          <S.Input
            id="id"
            type="text"
            placeholder="아이디"
            {...register('id', {
              required: '※ 아이디를 입력해 주세요.',
            })}
          />
          {errors.id && <p>{errors.id?.message}</p>}
          <S.Label htmlFor="password" className="a11y-hidden">
            비밀번호
          </S.Label>
          <S.Input
            type="password"
            id="password"
            placeholder="비밀번호"
            {...register('password', {
              required: '※ 비밀번호를 입력해 주세요.',
            })}
          />
          {errors.password && <p>{errors.password?.message}</p>}
          <S.LoginButton disabled={isSubmitting} onClick={onSubmit}>
            로그인
          </S.LoginButton>
        </S.LoginForm>

        <S.LinkBox>
          <Link to="/SignUp">
            <S.goToSignUp>회원가입</S.goToSignUp>
          </Link>
          <Link to="/ComingSoon">
            <span>비밀번호 찾기</span>
          </Link>
        </S.LinkBox>
      </S.Main>
    </S.Container>
  );
};

export default LoginForm;
