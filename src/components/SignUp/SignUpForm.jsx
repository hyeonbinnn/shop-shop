import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from './../../auth/useAuth';
import * as S from './SignUpForm.style';
import logo from '../../assets/icons/icon-logo.svg';

const SignUpForm = () => {
  // 전체 체크 필요
  const [isSelected, setIsSelected] = useState(true);
  const [checkedPW, setCheckedPW] = useState(false);
  const [checkedPW2, setCheckedPW2] = useState(false);

  const navigate = useNavigate();
  const { buyerSignUp, sellerSignUp, validID, validSellerCode } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
    watch,
    getValues,
  } = useForm({ mode: 'onBlur', defaultValues: { checkBox: false } });

  const checkValid = watch('checkBox');

  const goToLogin = () => {
    navigate('/login');
  };

  const onSubmit = handleSubmit((data) => {
    const phonenum = data.phonenum1 + data.phonenum2 + data.phonenum3;

    if (data.password !== data.password2) {
      setError('password2', { message: '비밀번호가 일치하지 않습니다.' }, { shouldFocus: true });
    }

    if (isSelected) {
      buyerSignUp(data, phonenum, setError, reset, goToLogin);
    } else {
      sellerSignUp(data, phonenum, setError, reset, goToLogin);
    }
  });

  const onValidID = () => {
    const id = getValues('userID');
    validID(id, setError);
  };

  const onValidPW = (e) => {
    const pw = e.target.value;
    const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (regEx.test(pw)) {
      setCheckedPW(true);
      setError('password', {
        message: '올바른 비밀번호입니다 :)',
      });
    } else {
      setCheckedPW(false);
      setError('password', {
        message: '8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.',
      });
    }
  };

  const onValidPW2 = (e) => {
    const pw1 = getValues('password');
    const pw2 = e.target.value;
    if (pw2 && pw2 === pw1) {
      setCheckedPW2(true);
      setError('password2', {
        message: '비밀번호 확인 완료!',
      });
    } else {
      setCheckedPW2(false);
      setError('password2', { message: '비밀번호가 일치하지 않습니다.' });
    }
  };

  const onValidSellerCode = () => {
    const code = getValues('sellerCode');
    code.length === 10 && validSellerCode(code, setError);
  };

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

        <S.SignUpForm onSubmit={onSubmit}>
          <S.Section>
            <S.Label htmlFor="userID">아이디</S.Label>
            <S.DoubleCheckBox>
              <S.Input id="userID" type="id" {...register('userID')} />
              <button type="button" onClick={onValidID}>
                중복확인
              </button>
            </S.DoubleCheckBox>
            {errors.userID && errors.userID.message === '멋진 아이디네요 :)' ? (
              <S.Pass>{errors.userID?.message}</S.Pass>
            ) : (
              <S.Error>{errors.userID?.message}</S.Error>
            )}

            <S.Label htmlFor="userPW">비밀번호</S.Label>
            <S.Input
              id="userPW"
              type="password"
              className="user-password"
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
                minLength: {
                  value: 8,
                  message: '8글자 이상 입력해 주세요.',
                },
                maxLength: {
                  value: 16,
                  message: '16자 이하로 입력해 주세요.',
                },
              })}
              onChange={onValidPW}
              checked={checkedPW}
            />
            {errors.password && errors.password.message === '올바른 비밀번호입니다 :)' ? (
              <S.Pass>{errors.password?.message}</S.Pass>
            ) : (
              <S.Error>{errors.password?.message}</S.Error>
            )}

            <S.Label htmlFor="userPW2">비밀번호 재확인</S.Label>
            <S.Input
              id="userPW2"
              type="password"
              className="user-password"
              {...register('password2', {
                required: '비밀번호 재확인이 필요합니다.',
              })}
              onChange={onValidPW2}
              checked={checkedPW2}
            />
            {errors.password2 && errors.password2.message === '비밀번호 확인 완료!' ? (
              <S.Pass>{errors.password2?.message}</S.Pass>
            ) : (
              <S.Error>{errors.password2?.message}</S.Error>
            )}
          </S.Section>

          <S.Section>
            <S.Label htmlFor="userName">이름</S.Label>
            <S.Input
              id="userName"
              type="text"
              {...register('name', {
                required: '이름을 입력해 주세요.',
              })}
            />
            {errors.name && <S.Error>{errors.name?.message}</S.Error>}

            <S.Label htmlFor="userNumber">휴대폰번호</S.Label>
            <S.PhoneBox>
              <S.Select id="phone" {...register('phonenum1')}>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>070</option>
              </S.Select>
              <S.Input
                type="text"
                maxLength="4"
                {...register('phonenum2', {
                  required: '중간자리를 입력해 주세요.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '숫자만 입력해 주세요.',
                  },
                })}
              />
              <S.Input
                type="text"
                maxLength="4"
                {...register('phonenum3', {
                  required: '끝자리를 입력해 주세요.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '숫자만 입력해 주세요.',
                  },
                })}
              />
            </S.PhoneBox>
            {errors.phonenum2 && <S.Error>{errors.phonenum2?.message}</S.Error>}
            {errors.phonenum3 && <S.Error>{errors.phonenum3?.message}</S.Error>}
          </S.Section>

          {!isSelected && (
            <S.Section>
              <S.Label htmlFor="sellerCode">사업자등록번호</S.Label>
              <S.DoubleCheckBox>
                <S.Input
                  id="sellerCode"
                  type="text"
                  maxLength="10"
                  {...register('sellerCode', {
                    required: '사업자 등록번호를 입력해 주세요.',
                    minLength: {
                      value: 10,
                      message: '사업자 등록번호는 10자리여야 합니다.',
                    },
                  })}
                />
                <button type="button" onClick={onValidSellerCode}>
                  인증
                </button>
              </S.DoubleCheckBox>
              {errors.sellerCode &&
              errors.sellerCode.message === '사용 가능한 사업자등록번호입니다.' ? (
                <S.Pass>{errors.sellerCode?.message}</S.Pass>
              ) : (
                <S.Error>{errors.sellerCode?.message}</S.Error>
              )}

              <S.Label htmlFor="storeName">스토어 이름</S.Label>
              <S.Input
                id="storeName"
                type="text"
                {...register('storeName', {
                  required: '스토어 이름을 입력해 주세요.',
                })}
              />
              {errors.storeName && <S.Error>{errors.storeName?.message}</S.Error>}
            </S.Section>
          )}
        </S.SignUpForm>
      </S.Main>

      <S.CheckBox>
        <input id="check" type="checkbox" {...register('checkBox')} />
        <label htmlFor="check" className="a11y-hidden">
          약관동의 체크박스
        </label>
        <span>
          SHOPSHOP <strong>이용약관</strong> 및 <strong>개인정보처리방침</strong>에 대한 내용을
          확인하였고 동의합니다.
        </span>
      </S.CheckBox>
      <S.SignUpButton type="submit" disabled={!isValid || !checkValid} onClick={onSubmit}>
        가입하기
      </S.SignUpButton>
    </S.Container>
  );
};

export default SignUpForm;
