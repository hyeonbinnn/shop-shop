import React, { useState } from 'react';
import * as S from './SellerItem.style';
import { useNavigate } from 'react-router-dom';
import Modal from './../common/Modal/Modal';

const SellerItem = ({
  image,
  price,
  product_id,
  product_info,
  product_name,
  shipping_fee,
  shipping_method,
  stock,
}) => {
  const navigate = useNavigate();
  const [delModal, setDelModal] = useState(false);

  const goToEditProduct = () => {
    navigate('/productUpload', {
      state: {
        product_id,
        product_name,
        image,
        price,
        shipping_method,
        shipping_fee,
        stock,
        product_info,
      },
    });
  };

  const openDelModal = () => {
    setDelModal(true);
  };
  const closeDelModal = () => {
    setDelModal(false);
  };

  const goToProductDetail = () => {
    window.scrollTo(0, 0);
    navigate(`/productDetail/${product_id}`, { replace: true });
  };

  return (
    <S.ItemBox>
      <S.ProductImg src={image} alt={product_name} key={product_id} onClick={goToProductDetail} />
      <S.ProductInfo>
        <strong key={product_id} onClick={goToProductDetail}>
          {product_name}
        </strong>
        <span>재고 : {stock}개</span>
      </S.ProductInfo>
      <S.ProductPrice>{price.toLocaleString()}원</S.ProductPrice>
      <S.EditButton onClick={goToEditProduct}>수정</S.EditButton>
      <S.DeleteButton onClick={openDelModal}>삭제</S.DeleteButton>
      {delModal && (
        <Modal
          option="delete"
          productId={product_id}
          openModal={openDelModal}
          closeModal={closeDelModal}
        />
      )}
    </S.ItemBox>
  );
};

export default SellerItem;
