import React from 'react';
import CartButton from '../../components/common/Button/CartButton';
import Header from '../../components/common/Header/Header';
import ProductData from '../../components/Product/ProductData';

const Store = () => {
  return (
    <>
      <Header />
      <CartButton />
      <ProductData />
    </>
  );
};

export default Store;
