import React from 'react';
import Product from './Product';
import * as S from './Product.style';

const ProductList = ({ data }) => {
  return (
    <S.Product>
      <S.ProductList>
        {data.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </S.ProductList>
    </S.Product>
  );
};

export default ProductList;
