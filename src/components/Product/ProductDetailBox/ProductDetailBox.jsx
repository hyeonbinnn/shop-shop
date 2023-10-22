import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './ProductDetailBox.style';
import QuantityButton from './../../common/Button/QuantityButton';
import { getCookie } from '../../../services/cookies';

const ProductDetailBox = ({ product_id, loading }) => {
  const loginType = getCookie('loginType');

  const detail = useSelector((state) => state.productsDetail.products);

  return (
    <S.Container>
      <S.H1 className="a11y-hidden">상품 상세 페이지</S.H1>
      <S.ProductImg src={detail.image} alt={detail.product_name} />
      <S.DetailBox>
        <S.ProductStore>{detail.store_name}</S.ProductStore>
        <S.ProductName>{detail.product_name}</S.ProductName>
        <S.ProductPrice>
          <strong>
            {detail.price}
            <span>원</span>
          </strong>
        </S.ProductPrice>
        <S.Shipping></S.Shipping>
      </S.DetailBox>
      <QuantityButton />
    </S.Container>
  );
};

export default ProductDetailBox;
