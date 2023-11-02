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

  const [loading, setLoading] = useState(true);
  const [checkedArr, setCheckedArr] = useState([]);

  let cartArr = [];

  const carts = useSelector((state) => state.carts.carts);

  useEffect(() => {
    getCartList(token)
      .then((res) => {
        dispatch(setCarts(res.results));
        setLoading(false);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
        setLoading(false);
      });
  }, [dispatch, token]);

  const getData = async () => {
    const result = await Promise.all(
      carts.map(async (el) => {
        const detail = await getDetailProduct(el.product_id);
        return detail;
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

    console.log('체크 상태 변경:', checked, '상품 정보:', item);
    console.log('업데이트된 checkedArr:', checkedArr);

    const allCheckBox = document.getElementById('allCheckBox');
    if (allCheckBox.checked && !checked) {
      allCheckBox.checked = false;
    } else {
      allCheckBox.checked = true;
    }
  };

  const checkedAllHandler = async (checked) => {
    if (checked) {
      try {
        const arr = await getData();
        setCheckedArr(arr.filter((i) => i.stock !== 0));
        console.log(checkedArr);
      } catch (error) {
        console.log('데이터 가져오는 중 에러 발생', error);
      }
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
