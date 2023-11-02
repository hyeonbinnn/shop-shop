import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './../pages/CartPage/Cart';
import Home from '../pages/HomePage/Home';
import Login from './../pages/LoginPage/Login';
import SignUp from './../pages/SignUpPage/SignUp';
import Payment from './../pages/PaymentPage/Payment';
import ProductDetail from './../pages/ProductPage/ProductDetail';
import Error404 from './../pages/ErrorPage/Error404';
import ComingSoon from './../pages/ErrorPage/ComingSoon';
import SellerCenter from './../pages/SellerCenter/SellerCenter';
import ProductUpload from './../pages/ProductUpload/ProductUpload';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productDetail/:product_id" element={<ProductDetail />} />
        <Route path="/sellerCenter" element={<SellerCenter />} />
        <Route path="/productUpload" element={<ProductUpload />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
