import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../services/cookies';
import { postCreateProduct, putEditProduct } from '../../api/seller';
import * as S from './ProductUpload.style';
import SellerHeader from './../../components/common/Header/SellerHeader';

const ProductUpload = () => {
  const [inputText, setInputText] = useState('');
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <>
      <SellerHeader />
      <S.Main>
        <S.Container>
          <S.Title>상품 등록</S.Title>
          <S.Section>
            <S.TextBox>
              <span>* 상품 등록 주의사항</span>
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
              <S.TopSection>
                <S.Image>
                  <label htmlFor="iamge">상품 이미지</label>
                  <S.ImageInputBox previewImg={previewImg}>
                    <input type="file" accept=".jpg, .jpeg, .png, .svg" id="image" />
                    <button type="button" />
                  </S.ImageInputBox>
                </S.Image>

                <S.Info>
                  <label htmlFor="product_name">상품명</label>
                  <S.NameInputBox>
                    <input type="text" id="product_name" maxLength="20" />
                    <span>{inputText.length} / 20</span>
                  </S.NameInputBox>

                  <label htmlFor="">판매가</label>
                  <S.InputBox>
                    <input type="text" />
                    <span>원</span>
                  </S.InputBox>

                  <S.ShippingSpan>배송방법</S.ShippingSpan>
                  <S.ShippingBox>
                    <button>택배,소포,등기</button>
                    <button>직접배송(화물배달)</button>
                  </S.ShippingBox>

                  <label htmlFor="">기본 배송비</label>
                  <S.InputBox>
                    <input type="text" />
                    <span>원</span>
                  </S.InputBox>

                  <label htmlFor="">재고</label>
                  <S.InputBox>
                    <input type="text" />
                    <span>개</span>
                  </S.InputBox>
                </S.Info>
              </S.TopSection>
              <S.BottomSection>
                <label htmlFor="product_info">상품 상세 정보</label>
                <input type="text" id='"product_info"' />
              </S.BottomSection>
              <S.ButtonBox>
                <button>취소</button>
                <button>저장하기</button>
              </S.ButtonBox>
            </S.ContentBox>
          </S.Section>
        </S.Container>
      </S.Main>
    </>
  );
};

export default ProductUpload;
