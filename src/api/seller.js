import { axiosInstance } from '../axios';

// 판매자 상품 불러오기
export const getSellerProduct = async () => {
  try {
    const res = await axiosInstance.get('seller/');
    return res.data.results;
  } catch (error) {
    return error.response;
  }
};

// 상품 등록하기
export const postCreateProduct = async (token, data) => {
  try {
    const res = await axiosInstance.post('products/', data, {
      headers: {
        Authorization: token,
      },
    });
    alert('상품이 등록되었습니다.');
    return res;
  } catch (error) {
    return error.response.data;
  }
};

// 상품 수정하기
export const putEditProduct = async (token, data) => {
  try {
    const res = await axiosInstance.patch(
      `products/${data.product_id}/`,
      {
        product_name: data.product_name,
        price: data.price,
        shipping_method: data.shipping_method,
        shipping_fee: data.shipping_fee,
        stock: data.stock,
        products_info: data.products_info,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    alert('상품이 수정되었습니다.');
    return res;
  } catch (error) {
    return error.response.data;
  }
};
