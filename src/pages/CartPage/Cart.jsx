import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCookie } from '../../services/cookies';
import { getCartList } from '../../api/cart';
import { getDetailProduct } from '../../api/product';
import { setCarts } from '../../redux/slices/slices';

import Header from './../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import CartItem from './../../components/CartBox/CartItem/CartItem';
import CartItemHeader from './../../components/CartBox/CartItem/CartItemHeader';
import TotalPrice from './../../components/CartBox/TotalPrice/TotalPrice';
import Loading from '../../components/common/Loading/Loading';

const Cart = () => {
  const naivgate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie('token');

  const [loading, setLoading] = useState(null);
  const [checkedArr, setCheckedArr] = useState([]);

  let cartArr = [];

  return (
    <>
      {loading && <Loading />}
      <Header />
      <section>
        <h1>장바구니</h1>
        <CartItemHeader />
        <CartItem />
        <TotalPrice />
      </section>
      <Footer />
    </>
  );
};

export default Cart;
