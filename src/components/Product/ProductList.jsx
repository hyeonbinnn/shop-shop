import React, { useState, useEffect } from 'react';
import * as S from './ProductList.style';
import { getAllProduct } from './../../api/product';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
      });
  }, []);

  return (
    <S.Product>
      <S.ProductList>
        {data.map((item) => (
          <S.ProductItem key={item.id}>
            <S.ProductBox>
              <S.ProductImg src={item.image} alt={item.product_name} />
            </S.ProductBox>
            <S.ProductName className="product-name sl-ellipsis">{item.product_name}</S.ProductName>
            <S.LikeBtn className="like-btn"></S.LikeBtn>
            <S.ProductPrice>
              <strong>
                {item.price}
                <span>원</span>
              </strong>
            </S.ProductPrice>
          </S.ProductItem>
        ))}
      </S.ProductList>
    </S.Product>
  );
};

export default ProductList;
