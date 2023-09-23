import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const ProductData = () => {
  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiEndPoint = 'mall';

  const apiUrl = `${apiKey}${apiEndPoint}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 에러 발생', error);
      });
  }, [apiUrl]);

  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default ProductData;
