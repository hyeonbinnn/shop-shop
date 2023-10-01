import { axiosInstance } from '../axios';

// 상품 전체 불러오기
export const getAllProduct = async () => {
  try {
    const res = await axiosInstance.get('products/');
    return res.data.results;
  } catch (error) {
    return error.response;
  }
};

// 상품 디테일
export const getDetailProduct = async (product_id) => {
  try {
    const res = await axiosInstance.get(`products/${product_id}/`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

// 상품 삭제하기
export const deleteProduct = async (token, product_id) => {
  try {
    await axiosInstance.delete(`products/${product_id}/`, {
      headers: {
        Authorization: token,
      },
    });
    alert('상품이 삭제되었습니다.');
    window.location.reload();
  } catch (error) {
    return error.response;
  }
};

// 상품 검색하기
export const getSearchProduct = async (searchText) => {
  try {
    const res = await axiosInstance.get(`products/?search=${searchText}`);
    return res.data.results;
  } catch (error) {
    return error.response;
  }
};
