import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './../pages/ProductPage/ProductDetail';
import Cart from './../pages/CartPage/Cart';
import Home from '../pages/HomePage/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/join" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Cart />} />
        <Route path="/productDetail/:product_id" element={<ProductDetail />} />
        <Route path="*" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
