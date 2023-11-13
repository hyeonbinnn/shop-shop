import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from './ProductDetailBox.style';
import { getCookie } from '../../../services/cookies';
import QuantityButton from '../QuantityButton/QuantityButton';

const ProductDetailBox = ({ loading }) => {
  const [orderNum, setOrderNum] = useState(1);
  const loginType = getCookie('loginType');

  const detail = useSelector((state) => state.productsDetail.products);
  const price = detail.price;
  const stock = detail.stock;
  const totalPrice = orderNum * price;

  const minusStock = () => {
    if (orderNum === 1) {
      alert('최소 주문 수량은 1개입니다.');
    } else if (stock > 1 && orderNum > 0) {
      setOrderNum(orderNum - 1);
    }
  };

  const plusStock = () => {
    if (stock > orderNum) {
      setOrderNum(orderNum + 1);
    }
  };

  const shipping = (method, fee) => {
    if (method === 'DELIVERY' && fee !== 0) {
      return `택배배송 / ${fee.toLocaleString()}원`;
    } else if (method === 'PARCEL' && fee !== 0) {
      return `소포배송 / ${fee.toLocaleString()}원`;
    } else if (method === 'DELIVERY' && fee === 0) {
      return `택배배송 / 무료배송`;
    } else if (method === 'PARCEL' && fee === 0) {
      return `소포배송 / 무료배송`;
    }
  };

  return (
    <S.Main>
      <S.Container>
        <S.H1 className="a11y-hidden">상품 상세 페이지</S.H1>
        <S.ProductImg src={detail.image} alt={detail.product_name} />
        <S.DetailBox>
          <S.ProductStore>{detail.store_name}</S.ProductStore>
          <S.ProductName>{detail.product_name}</S.ProductName>
          <S.ProductPrice>
            <strong>
              {detail.price !== undefined ? detail.price.toLocaleString() : ''}
              <span>원</span>
            </strong>
          </S.ProductPrice>
          <S.Shipping>
            {detail.shipping_method && detail.shipping_fee !== undefined
              ? shipping(detail.shipping_method, detail.shipping_fee.toLocaleString())
              : ''}
          </S.Shipping>
          <QuantityButton
            totalPrice={totalPrice}
            orderNum={orderNum}
            minusStock={minusStock}
            plusStock={plusStock}
            detail={detail}
            loginType={loginType}
            soldOut={stock === 0}
          />
        </S.DetailBox>
      </S.Container>

      <S.ProductInfo>
        <S.Menu>
          <input type="radio" id="detail" name="tab" defaultChecked />
          <label htmlFor="detail">상품 상세</label>
          <input type="radio" id="review" name="tab" />
          <label htmlFor="review">리뷰</label>
          <input type="radio" id="Q&A" name="tab" />
          <label htmlFor="Q&A">Q&A</label>
          <input type="radio" id="return" name="tab" />
          <label htmlFor="return">반품 / 교환정보</label>
        </S.Menu>
        <S.Detail>{detail.product_info}</S.Detail>
      </S.ProductInfo>
    </S.Main>
  );
};

export default ProductDetailBox;
