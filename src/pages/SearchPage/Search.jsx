import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Slider from '../../components/Slider/Slider';
import Footer from './../../components/common/Footer/Footer';
import {
  Container,
  ProductList,
  ProductItem,
  ProductImg,
  ProductStore,
  ProductName,
  LikeBtn,
  ProductPrice,
} from '../../components/ProductList/ProductList.style';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state;

  return (
    <>
      <Header />
      <Slider />
      <Container>
        <ProductList>
          {result &&
            result.map((item) => (
              <ProductItem
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/productDetail/${item.product_id}`);
                }}
                key={item.product_id}
              >
                <ProductImg src={item.image} />
                <ProductStore>{item.store_name}</ProductStore>
                <ProductName className="product-name sl-ellipsis">{item.product_name}</ProductName>
                <LikeBtn></LikeBtn>
                <ProductPrice>
                  <strong>
                    {item.price.toLocaleString()}
                    <span>원</span>
                  </strong>
                </ProductPrice>
              </ProductItem>
            ))}
        </ProductList>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
