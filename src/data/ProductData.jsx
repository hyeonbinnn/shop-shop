import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Product/ProductList';

const ProductData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://35.76.53.28:8080/mall ')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 에러 발생');
      });
  }, []);

  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default ProductData;
