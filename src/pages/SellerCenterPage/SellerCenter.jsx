import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../../services/cookies';
import { getSellerProduct } from '../../api/seller';
import * as S from './SellerCenter.style';
import SellerHeader from '../../components/common/Header/SellerHeader';
import SellerItem from './../../components/SellerItem/SellerItem';

const SellerCenter = () => {
  const token = getCookie('token');
  const [sellerProductList, setSellerProductList] = useState([]);

  useEffect(() => {
    getSellerProduct(token).then((res) => {
      setSellerProductList(res);
    });
  }, [token]);

  return (
    <>
      <SellerHeader />
      <S.Main>
        <S.Container>
          <S.TitleBox>
            <S.Title>
              대시보드 <strong>{sellerProductList[0]?.store_name}</strong>
            </S.Title>
            <Link to="/productUpload">
              <button>상품 업로드</button>
            </Link>
          </S.TitleBox>

          <S.ContentBox>
            <S.Menu>
              <li>판매중인 상품 ({sellerProductList.length})</li>
              <li>주문/배송</li>
              <li>문의/리뷰</li>
              <li>통계</li>
              <li>스토어 설정</li>
            </S.Menu>
            <S.ProductBox>
              <S.ItemHeader>
                <li>상품정보</li>
                <li>판매가격</li>
                <li>수정</li>
                <li>삭제</li>
              </S.ItemHeader>
              {sellerProductList.length > 0
                ? sellerProductList.map((item) => (
                    <SellerItem key={item.product_id} token={token} {...item} />
                  ))
                : null}
            </S.ProductBox>
          </S.ContentBox>
        </S.Container>
      </S.Main>
    </>
  );
};

export default SellerCenter;
