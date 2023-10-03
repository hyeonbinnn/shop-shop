import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ProductList.style';
import { getAllProduct } from './../../api/product';
import Loading from '../common/Loading/Loading';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
        setLoading(false);
      });
  }, []);

  return (
    <S.Product>
      {loading && <Loading />}
      <S.ProductList>
        {data &&
          data.map((item) => (
            <Link to={'/productDetail/:product_id'} key={item.id}>
              <S.ProductItem>
                <S.ProductBox>
                  <S.ProductImg src={item.image} alt={item.product_name} />
                </S.ProductBox>
                <S.ProductName className="product-name sl-ellipsis">
                  {item.product_name}
                </S.ProductName>
                <S.LikeBtn className="like-btn"></S.LikeBtn>
                <S.ProductPrice>
                  <strong>
                    {item.price}
                    <span>원</span>
                  </strong>
                </S.ProductPrice>
              </S.ProductItem>
            </Link>
          ))}
      </S.ProductList>
    </S.Product>
  );
};

export default ProductList;
