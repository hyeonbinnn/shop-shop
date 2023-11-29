import { axiosInstance } from '../axios';

// 주문 목록 가져오기
export const getOrderList = async (token) => {
  try {
    const res = await axiosInstance.post('order/', {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// 주문 생성하기
export const postCreateOrder = async (token, data) => {
  try {
    const res = await axiosInstance.post('order/', data, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
