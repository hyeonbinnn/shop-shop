import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SellerCenter.style';
import SellerHeader from '../../components/common/Header/SellerHeader';

const SellerCenter = () => {
  return (
    <>
      <SellerHeader />
      <S.Main>
        <S.Container>
          <S.TitleBox>
            <S.Title>
              대시보드<strong></strong>
            </S.Title>
            <Link to="/productUpload">
              <button>상품 업로드</button>
            </Link>
          </S.TitleBox>

          <S.ContentBox>
            <S.Menu>
              <li>판매중인 상품</li>
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
            </S.ProductBox>
          </S.ContentBox>
        </S.Container>
      </S.Main>
    </>
  );
};

export default SellerCenter;
