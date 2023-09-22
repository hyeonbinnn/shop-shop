import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './../pages/StorePage/Store';
import ProductDetail from './../pages/ProductPage/ProductDetail';
import Cart from './../pages/CartPage/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
