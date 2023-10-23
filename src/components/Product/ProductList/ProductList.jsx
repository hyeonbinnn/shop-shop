import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './ProductList.style';
import { getAllProduct } from '../../../api/product';
import { setProducts } from '../../../redux/slices/slices';
import Loading from '../../common/Loading/Loading';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        dispatch(setProducts(response));
        setLoading(false);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
        setLoading(false);
      });
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  return (
    <S.Container>
      {loading && <Loading />}
      <S.ProductList>
        {products &&
          products.map((item) => (
            <S.ProductItem
              key={item.product_id}
              onClick={() => navigate(`/productDetail/${item.product_id}`)}
            >
              <S.ProductImg src={item.image} alt={item.product_name} />
              <S.ProductStore>{item.store_name}</S.ProductStore>
              <S.ProductName className="product-name sl-ellipsis">
                {item.product_name}
              </S.ProductName>
              <S.LikeBtn className="like-btn"></S.LikeBtn>
              <S.ProductPrice>
                <strong>
                  {item.price.toLocaleString()}
                  <span>원</span>
                </strong>
              </S.ProductPrice>
            </S.ProductItem>
          ))}
      </S.ProductList>
    </S.Container>
  );
};

export default ProductList;
