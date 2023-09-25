import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProductData from '../../components/Product/ProductData';
import ImageSlider from '../../components/Slider/ImageSlider';

const Store = () => {
  return (
    <>
      <Header />
      <ImageSlider />
      <ProductData />
      <Footer />
    </>
  );
};

export default Store;
