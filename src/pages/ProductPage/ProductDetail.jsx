import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading/Loading';
import Header from './../../components/common/Header/Header';
import Footer from './../../components/common/Footer/Footer';
import ProductDetailBox from '../..//components/ProductDetail/ProductDetailBox/ProductDetailBox';
import { getDetailProduct } from '../../api/product';
import { getProducts } from '../../redux/slices/slices';

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { product_id } = useParams();

  useEffect(() => {
    getDetailProduct(product_id).then((response) => {
      dispatch(getProducts(response));
      setLoading(false);
    });
  }, [product_id, dispatch]);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <ProductDetailBox productId={product_id} loading={loading} />
      <Footer />
    </>
  );
};

export default ProductDetail;
