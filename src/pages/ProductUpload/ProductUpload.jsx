import React from 'react';
import * as S from './ProductUpload.style';
import SellerHeader from './../../components/common/Header/SellerHeader';

const ProductUpload = () => {
  return (
    <>
      <SellerHeader />
      <S.Main>
        <S.Container>
          <S.Title>상품 등록</S.Title>
          <S.Section>
            <S.TextBox>
              <p>* 상품 등록 주의사항</p>
              <div>
                <ul>
                  <li>상품명은 공백 포함 20자까지 입력 가능합니다.</li>
                  <li>상품 이미지 등록 시, 이미지 파일 확장자만 업로드 가능합니다.</li>
                  <li>판매가와 재고는 0으로 설정할 수 없습니다.</li>
                  <li>기본 배송비를 0원으로 설정 시, 무료배송으로 등록됩니다.</li>
                  <li>
                    각 필드는 필수 입력 정보입니다. 모든 상품 정보가 입력되어야 정상적으로
                    등록됩니다.
                  </li>
                  <li>마켓과 상관없는 상품 정보를 입력할 시, 삭제 될 수 있습니다.</li>
                </ul>
              </div>
            </S.TextBox>
            <S.ContentBox>
              <S.ProductInfo>
                <img />
                <div></div>
              </S.ProductInfo>
              <S.ProductDetail></S.ProductDetail>
            </S.ContentBox>
          </S.Section>
        </S.Container>
      </S.Main>
    </>
  );
};

export default ProductUpload;
