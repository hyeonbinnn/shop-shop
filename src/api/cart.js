import { axiosInstance } from '../axios';

// 장바구니 목록 보기
export const getCartList = async (token) => {
  try {
    const res = await axiosInstance.get('cart/', {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// 장바구니에 물건 넣기
export const postAddCart = async (token, product_id, quantity) => {
  try {
    const res = await axiosInstance.post(
      'cart/',
      {
        product_id: product_id,
        quantity: quantity,
        check: true,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// 장바구니 수량 수정하기
export const putEditQuantityCart = async (token, cart_id, product_id, orderNum, active) => {
  try {
    await axiosInstance.put(
      `cart/${cart_id}/`,
      {
        product_id: product_id,
        quantity: orderNum,
        is_active: active,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
};

// 장바구니 전부 삭제하기
export const deleteAllCart = async (token) => {
  try {
    await axiosInstance.delete('cart', {
      headers: {
        Authorization: token,
      },
    });
    alert('삭제되었습니다.');
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
};

// 장바구니 개별 삭제하기
export const deleteCartItem = async (token, cart_id) => {
  try {
    await axiosInstance.delete(`cart/${cart_id}/`, {
      headers: {
        Authorization: token,
      },
    });
    alert('삭제되었습니다.');
    window.location.reload();
  } catch (error) {
    return error.response.data;
  }
};
