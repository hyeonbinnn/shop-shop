import React, { useState } from 'react';
import * as S from './PaymentForm.style';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../../services/cookies';
import { postCreateOrder } from '../../../api/order';
import DaumPostcode from 'react-daum-postcode';

const PaymentForm = ({ products, totalPrice, totalFee, totalPay }) => {
  const navigate = useNavigate();
  const token = getCookie('token');
  const [addressValue, setAddressValue] = useState('');
  const [popup, setPopup] = useState('');
  const [zipCode, setZipCode] = useState('');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({ mode: 'onBlur', defaultValues: { checkBox: false } });

  const checkValid = watch('checkBox');

  const onCompletePost = (data) => {
    setAddressValue(data.address);
    setZipCode(data.zonecode);
  };

  const postCodeStyle = {
    margin: '20px 0px',
    width: '800px',
    height: '450px',
    zIndex: 1,
  };

  const payFunc = async (data) => {
    postCreateOrder(token, data);
  };

  const orderData = async (data, receiver_phoneNum, receiver_address) => {
    const product_id = products[0].product_id;
    const quantity = products[0].quantity;
    const order_kind = products[0].order_kind;
    const receiver = data.receiver;
    const receiver_phone_number = receiver_phoneNum;
    const address = receiver_address;
    const address_message = data.address_message;
    const payment_method = data.payMethod;

    const direct_order_data = {
      product_id,
      quantity,
      order_kind,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
      total_price: totalPay,
    };

    const cart_order_data = {
      total_price: totalPay,
      order_kind,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
    };

    const cart_one_order_data = {
      product_id,
      quantity,
      order_kind,
      total_price: totalPay,
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
    };

    try {
      if (order_kind === 'direct_order') {
        await payFunc(direct_order_data);
      } else if (order_kind === 'cart_order') {
        await payFunc(cart_order_data);
      } else if (order_kind === 'cart_one_order') {
        await payFunc(cart_one_order_data);
      }
      alert('주문 완료되었습니다!');
      navigate('/');
    } catch (error) {
      return error.response.data;
    }
  };

  const onSubmit = handleSubmit((data) => {
    const receiver_phoneNum =
      data.receiver_phoneNum1 + data.receiver_phoneNum2 + data.receiver_phoneNum3;
    const receiver_address = addressValue + '' + data.address;
    orderData(data, receiver_phoneNum, receiver_address);
  });

  return (
    <S.Form onSubmit={onSubmit}>
      <S.ShippingInfo>
        <S.Title>배송정보</S.Title>
        <S.SubTitle>주문자 정보</S.SubTitle>
        <S.InfoBox>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            {...register('orderer', { required: '필수 응답 항목입니다.' })}
          />
          {errors.orderer && <S.Error>{errors.orderer?.message}</S.Error>}
        </S.InfoBox>
        <S.PhoneNum>
          <label htmlFor="phoneNum">휴대폰</label>
          <input
            type="text"
            id="phoneNum"
            maxLength="3"
            {...register('orderer_phonenum1', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          <span>-</span>
          <input
            type="text"
            id="phoneNum"
            maxLength="4"
            {...register('orderer_phonenum2', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          <span>-</span>
          <input
            type="text"
            id="phoneNum"
            maxLength="4"
            {...register('orderer_phonenum3', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          {errors.orderer_phonenum1 && !errors.orderer_phonenum2 && !errors.orderer_phonenum3 && (
            <S.Error>{errors.orderer_phonenum1?.message}</S.Error>
          )}
          {errors.orderer_phonenum2 && !errors.orderer_phonenum1 && !errors.orderer_phonenum3 && (
            <S.Error>{errors.orderer_phonenum2?.message}</S.Error>
          )}
          {errors.orderer_phonenum3 && !errors.orderer_phonenum1 && !errors.orderer_phonenum2 && (
            <S.Error>{errors.orderer_phonenum3?.message}</S.Error>
          )}
        </S.PhoneNum>
        <S.InfoBox>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: '필수 응답 항목입니다.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: '이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && <S.Error>{errors.email?.message}</S.Error>}
        </S.InfoBox>

        <S.SubTitle>배송지 정보</S.SubTitle>
        <S.InfoBox>
          <label htmlFor="receiver">수령인</label>
          <input
            type="text"
            id="receiver"
            {...register('receiver', { required: '필수 응답 항목입니다.' })}
          />
          {errors.receiver && <S.Error>{errors.receiver?.message}</S.Error>}
        </S.InfoBox>

        <S.PhoneNum>
          <label htmlFor="phoneNum">휴대폰</label>
          <input
            type="text"
            id="phoneNum"
            maxLength="3"
            {...register('receiver_phonenum1', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          <span>-</span>
          <input
            type="text"
            id="phoneNum"
            maxLength="4"
            {...register('receiver_phonenum2', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          <span>-</span>
          <input
            type="text"
            id="phoneNum"
            maxLength="4"
            {...register('receiver_phonenum3', {
              required: '필수 응답 항목입니다.',
              pattern: { value: /^[0-9]+$/, message: '숫자만 입력해 주세요.' },
            })}
          />
          {errors.receiver_phonenum1 &&
            !errors.receiver_phonenum2 &&
            !errors.receiver_phonenum3 && <S.Error>{errors.receiver_phonenum1?.message}</S.Error>}
          {errors.receiver_phonenum2 &&
            !errors.receiver_phonenum1 &&
            !errors.receiver_phonenum3 && <S.Error>{errors.receiver_phonenum2?.message}</S.Error>}
          {errors.receiver_phonenum3 &&
            !errors.receiver_phonenum1 &&
            !errors.receiver_phonenum2 && <S.Error>{errors.receiver_phonenum3?.message}</S.Error>}
        </S.PhoneNum>

        <S.InfoBox>
          <label htmlFor="address">배송주소</label>
          <S.Address>
            <div>
              <input type="text" placeholder="우편번호" value={zipCode} disabled />
              <S.ZipCode onClick={() => setPopup(!popup)}>우편번호 조회</S.ZipCode>
              {popup && (
                <span>
                  <DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />
                </span>
              )}
            </div>
            <input type="text" placeholder="주소" value={addressValue} disabled />
            <input
              type="text"
              placeholder="상세주소"
              {...register('address', { required: '필수 응답 항목입니다.' })}
            />
          </S.Address>
        </S.InfoBox>
        <S.AddressMsg>
          <label htmlFor="address_message">배송메시지</label>
          <input
            type="text"
            id="address_message"
            placeholder="배송 요청사항을 입력해 주세요."
            {...register('address_message', {
              required: '필수 응답 항목입니다.',
            })}
          />
        </S.AddressMsg>
      </S.ShippingInfo>

      <S.PaymentInfo>
        <S.PaymentMethod>
          <S.Title>결제수단</S.Title>
          <S.MethodBox>
            <input
              type="radio"
              value="CARD"
              id="card"
              name="payMethod"
              {...register('payMethod', {
                required: '결제 수단을 선택해 주세요.',
              })}
            />
            <label htmlFor="card">신용/체크카드</label>
            <input
              type="radio"
              value="DEPOSIT"
              id="deposit"
              name="payMethod"
              {...register('payMethod')}
            />
            <label htmlFor="deposit">무통장 입금</label>
            <input
              type="radio"
              value="PHONEPAY"
              id="phonePay"
              name="payMethod"
              {...register('payMethod')}
            />
            <label htmlFor="phonePay">휴대폰 결제</label>
            <input
              type="radio"
              value="NAVERPAY"
              id="naverPay"
              name="payMethod"
              {...register('payMethod')}
            />
            <label htmlFor="naverPay">네이버페이</label>
            <input
              type="radio"
              value="KAKAOPAY"
              id="kakaoPay"
              name="payMethod"
              {...register('payMethod')}
            />
            <label htmlFor="kakaoPay">카카오페이</label>
          </S.MethodBox>
          {errors.payMethod && <S.Error>{errors.payMethod?.message}</S.Error>}
        </S.PaymentMethod>

        <S.FinalPayment>
          <S.FinalTitle>최종결제 정보</S.FinalTitle>
          <S.FinalBox>
            <S.CheckFinal>
              <S.TopInfo>
                <span>- 상품금액</span>
                <strong>
                  {totalPrice.toLocaleString()}
                  <S.Won>원</S.Won>
                </strong>
              </S.TopInfo>
              <S.TopInfo>
                <span>- 할인금액</span>
                <strong>
                  0<S.Won>원</S.Won>
                </strong>
              </S.TopInfo>
              <S.TopInfo>
                <span>- 배송비</span>
                <strong>
                  {totalFee.toLocaleString()}
                  <S.Won>원</S.Won>
                </strong>
              </S.TopInfo>
              <S.BottomInfo>
                <span>- 결제금액</span>
                <strong>{totalPay.toLocaleString()}원</strong>
              </S.BottomInfo>
            </S.CheckFinal>

            <S.GoToFinal>
              <S.CheckBox>
                <input type="checkbox" id="check" {...register('checkBox', { required: true })} />
                <label htmlFor="check">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</label>
              </S.CheckBox>
              <button disabled={!isValid || !checkValid} onClick={onSubmit}>
                결제하기
              </button>
            </S.GoToFinal>
          </S.FinalBox>
        </S.FinalPayment>
      </S.PaymentInfo>
    </S.Form>
  );
};

export default PaymentForm;
