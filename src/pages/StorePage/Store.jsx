import React from 'react';
// import CartButton from '../../components/common/Button/CartButton';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProductData from '../../components/Product/ProductData';

const Store = () => {
  return (
    <>
      <Header />
      {/* <CartButton /> */}
      <ProductData />
      <Footer />
    </>
  );
};

export default Store;
