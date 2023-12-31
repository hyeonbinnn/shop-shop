import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../services/cookies';
import { postCreateProduct, putEditProduct } from '../../api/seller';
import * as S from './ProductUpload.style';
import SellerHeader from './../../components/common/Header/SellerHeader';

const ProductUpload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imageInput = useRef();
  const token = getCookie('token');
  const itemData = location.state;

  const [inputText, setInputText] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [isSelected, setIsSelected] = useState(true);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur', defaultValues: itemData });

  const checkedMethod = () => {
    setIsSelected(!isSelected);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImage = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    setUploadImage(file);
  };

  const onSubmit = handleSubmit((data) => {
    data.image = uploadImage;
    !itemData
      ? postCreateProduct(token, data).then((res) =>
          navigate(`/productDetail/${res.data.product_id}`)
        )
      : putEditProduct(token, data).then(() => navigate('/sellerCenter'));
  });

  useEffect(() => {
    if (itemData?.image) {
      setPreviewImage(itemData.image);
      setUploadImage(itemData.image);
    }
  }, [setPreviewImage, itemData?.image]);

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
            <S.ContentBox onSubmit={onSubmit}>
              <S.TopSection>
                <S.ImageWrap>
                  <label htmlFor="image">상품 이미지</label>
                  <S.ImageBox previewImage={previewImage}>
                    <input
                      type="file"
                      accept="image/"
                      id="image"
                      {...register('image')}
                      ref={imageInput}
                      onChange={handleImageChange}
                    />
                    <button type="button" onClick={handleImage} />
                  </S.ImageBox>
                </S.ImageWrap>

                <S.InfoWrap>
                  <label htmlFor="product_name">상품명</label>
                  <S.NameBox>
                    <S.Input
                      type="text"
                      id="product_name"
                      maxLength="20"
                      isError={errors.product_name}
                      {...register('product_name')}
                      onChange={handleInputChange}
                    />
                    <span>{inputText.length} / 20</span>
                  </S.NameBox>

                  <label htmlFor="price">판매가</label>
                  <S.InputBox>
                    <S.Input
                      type="text"
                      id="price"
                      isError={errors.price}
                      {...register('price', {
                        pattern: /^[1-9]\d*$/,
                      })}
                    />
                    <S.Span isError={errors.price}>원</S.Span>
                  </S.InputBox>

                  <S.ShippingTitle>배송방법</S.ShippingTitle>
                  <S.ShippingBox>
                    <S.ShippingBtn
                      type="button"
                      name="shipping_method"
                      id="shipping_method"
                      value="PARCEL"
                      isSelected={isSelected}
                      onClick={() => checkedMethod()}
                      {...register('shipping_method')}
                    >
                      택배,소포,등기
                    </S.ShippingBtn>
                    <S.ShippingBtn
                      type="button"
                      name="shipping_method"
                      id="shipping_method"
                      value="DELIVERY"
                      isSelected={!isSelected}
                      onClick={() => checkedMethod()}
                      {...register('shipping_method')}
                    >
                      직접배송(화물배달)
                    </S.ShippingBtn>
                  </S.ShippingBox>

                  <label htmlFor="shipping_fee">기본 배송비</label>
                  <S.InputBox>
                    <S.Input
                      type="text"
                      id="shipping_fee"
                      isError={errors.shipping_fee}
                      {...register('shipping_fee', {
                        pattern: /^[0-9]\d*$/,
                      })}
                    />
                    <S.Span isError={errors.shipping_fee}>원</S.Span>
                  </S.InputBox>

                  <label htmlFor="stock">재고</label>
                  <S.InputBox>
                    <S.Input
                      type="text"
                      id="stock"
                      isError={errors.stock}
                      {...register('stock', {
                        pattern: /^[1-9]\d*$/,
                      })}
                    />
                    <S.Span isError={errors.stock}>개</S.Span>
                  </S.InputBox>
                </S.InfoWrap>
              </S.TopSection>
              <S.BottomSection>
                <label htmlFor="product_info">상품 상세 정보</label>
                <textarea
                  type="text"
                  id="product_info"
                  isError={errors.product_info}
                  {...register('product_info')}
                />
              </S.BottomSection>
              <S.ButtonBox>
                <button onClick={() => navigate('/sellerCenter')}>취소</button>
                <button disabled={!isValid || !uploadImage} onClick={onSubmit}>
                  저장
                </button>
              </S.ButtonBox>
            </S.ContentBox>
          </S.Section>
        </S.Container>
      </S.Main>
    </>
  );
};

export default ProductUpload;
