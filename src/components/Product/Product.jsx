import React from 'react';
import * as S from './Product.style';

const Product = ({ product }) => {
  const imgUrl = 'http://test.api.weniv.co.kr/' + product.thumbnailImg;

  return (
    <S.ProductItem>
      <S.ProductBox>
        <S.ProductImg src={imgUrl} alt={product.productName} />
      </S.ProductBox>
      <S.ProductName className="product-name sl-ellipsis">{product.productName}</S.ProductName>
      <S.LikeBtn className="like-btn"></S.LikeBtn>
      <S.ProductPrice>
        <strong>
          {product.price}
          <span>원</span>
        </strong>
      </S.ProductPrice>
    </S.ProductItem>
  );
};

export default Product;
