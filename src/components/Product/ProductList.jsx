import React from 'react';
import Product from './Product';
import * as S from './Product.style';
import CartBtn from '../common/Button/CartBtn';

const ProductList = ({ data }) => {
  return (
    <S.Product>
      <S.ProductList>
        {data.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </S.ProductList>
      <CartBtn />
    </S.Product>
  );
};

export default ProductList;
