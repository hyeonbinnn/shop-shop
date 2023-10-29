import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Cart.style';

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
import CartItemEmpty from './../../components/CartBox/CartItem/CartItemEmpty';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie('token');

  const [loading, setLoading] = useState(null);
  const [checkedArr, setCheckedArr] = useState([]);

  let cartArr = [];

  const carts = useSelector((state) => state.carts.carts);

  useEffect(() => {
    getCartList(token).then((res) => {
      dispatch(setCarts(res.results));
      setLoading(false);
    });
    setLoading(true);
  }, [dispatch, token]);

  const getData = () => {
    const result = Promise.all(
      carts.map((el) => {
        return getDetailProduct(el.product_id);
      })
    );
    return result;
  };

  const checkedItemHandler = (checked, item, id) => {
    if (item.stock !== 0 && checked) {
      setCheckedArr((prev) => [...prev, item]);
    } else {
      setCheckedArr(checkedArr.filter((i) => i.product_id !== id));
    }

    const allCheckBox = document.getElementById('allCheckBox');
    if (allCheckBox.checked && !checked) {
      allCheckBox.checked = false;
    } else {
      allCheckBox.checked = true;
    }
  };

  const checkedAllHandler = (checked) => {
    if (checked) {
      getData().then((arr) => {
        setCheckedArr(arr.filter((i) => i.stock !== 0));
      });

      console.log(checkedArr);
    } else {
      setCheckedArr([]);
    }
  };

  checkedArr.map((p) =>
    carts
      .filter((c) => p.product_id === c.product_id)
      .map((c) => {
        p.quantity = c.quantity;
        p.is_active = c.is_active;
        return cartArr.push(p);
      })
  );

  const priceArr = cartArr.filter((i) => i.is_active).map((i) => i.price * i.quantity);

  const feeArr = cartArr.filter((i) => i.is_active).map((i) => i.shipping_fee);

  const total = (arr) => {
    const res = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    return res;
  };

  const totalPrice = total(priceArr);
  const totalFee = total(feeArr);
  const totalPay = totalPrice + totalFee;

  const goToPayment = () => {
    const selectedItems = cartArr.map((selected) => ({
      ...selected,
      order_kind: 'cart_order',
    }));
    navigate('/payment', {
      state: { products: selectedItems },
    });
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      <S.CartSection>
        <h1>장바구니</h1>
        <CartItemHeader checkedAllHandler={checkedAllHandler} />
        {carts.length > 0 ? (
          carts.map((item) => (
            <CartItem
              key={item.product_id}
              checkedItemHandler={checkedItemHandler}
              checkedArr={checkedArr}
              {...item}
            />
          ))
        ) : (
          <CartItemEmpty />
        )}
        <TotalPrice totalPrice={totalPrice} totalFee={totalFee} totalPay={totalPay} />
        <S.BuyButton onClick={goToPayment} disabled={checkedArr.length === 0}>
          주문하기
        </S.BuyButton>
      </S.CartSection>
      <Footer />
    </>
  );
};

export default Cart;
