import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProductData from '../../components/Product/ProductData';
import Slider from '../../components/Slider/Slider';

const Store = () => {
  return (
    <>
      <Header />
      <Slider />
      <ProductData />
      <Footer />
    </>
  );
};

export default Store;
