import React, { useState } from 'react';
import * as S from './PaymentForm.style';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DaumPostCoed from 'react-daum-postcode';
import { getCookie } from '../../../services/cookies';
import { postCreateOrder } from '../../../api/order';

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
    setZipCode(data.zoneCode);
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
    <S.Form>
      <S.ShippingInfo>
        <S.Title>배송정보</S.Title>
        <S.SubTitle>주문자 정보</S.SubTitle>
        <S.InfoBox>
          <label htmlFor="name">이름</label>
          <input />
        </S.InfoBox>
        <S.InfoBox>
          <label htmlFor="phoneNum">휴대폰</label>
          <input />
          <span>-</span>
          <input />
          <span>-</span>
          <input />
        </S.InfoBox>
        <S.InfoBox>
          <label htmlFor="email">이메일</label>
          <input />
        </S.InfoBox>

        <S.SubTitle>배송지 정보</S.SubTitle>
        <S.InfoBox>
          <label htmlFor="receiver">수령인</label>
          <input />
        </S.InfoBox>
        <S.InfoBox>
          <label htmlFor="phoneNum">휴대폰</label>
          <input />
          <span>-</span>
          <input />
          <span>-</span>
          <input />
        </S.InfoBox>
        <S.InfoBox>
          <label htmlFor="address">배송주소</label>
          <input />
        </S.InfoBox>
        <S.InfoBox>
          <label htmlFor="address_message">배송메시지</label>
          <input />
        </S.InfoBox>
      </S.ShippingInfo>

      <S.PaymentInfo>
        <S.PaymentMethod>
          <S.Title>결제수단</S.Title>
          <S.MethodBox>
            <input />
            <label htmlFor="card">신용/체크카드</label>
            <input />
            <label htmlFor="deposit">무통장 입금</label>
            <input />
            <label htmlFor="phonePay">휴대폰 결제</label>
            <input />
            <label htmlFor="naverPay">네이버페이</label>
            <input />
            <label htmlFor="kakaoPay">카카오페이</label>
          </S.MethodBox>
        </S.PaymentMethod>

        <S.FinalPayment>
          <S.FinalTitle>최종결제 정보</S.FinalTitle>
          <S.FinalBox>
            <S.CheckFinal>
              <S.TopInfo>
                <span>- 상품금액</span>
                <strong></strong>
              </S.TopInfo>
              <S.TopInfo>
                <span>- 할인금액</span>
                <strong></strong>
              </S.TopInfo>
              <S.TopInfo>
                <span>- 배송비</span>
                <strong></strong>
              </S.TopInfo>
              <S.BottomInfo>
                <span>- 결제금액</span>
                <strong></strong>
              </S.BottomInfo>
            </S.CheckFinal>
            <S.GoToFinal>
              <input />
              <label htmlFor="check">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</label>
              <button>결제하기</button>
            </S.GoToFinal>
          </S.FinalBox>
        </S.FinalPayment>
      </S.PaymentInfo>
    </S.Form>
  );
};

export default PaymentForm;
