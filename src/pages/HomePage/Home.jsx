import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import ProductList from '../../components/Product/ProductList';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
