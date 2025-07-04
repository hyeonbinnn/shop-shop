# 🛍️ SHOPSHOP OPEN MARKET 
![그림1](https://github.com/hyeonbinnn/shop-shop/assets/117449788/e1a0186a-3342-46ca-abec-7536b3dfa486)

<br>
<br>
<br>

## 목차
- [프로젝트 정보](#프로젝트-정보)
- [폴더 구조](#폴더-구조)
- [사용 기술](#사용-기술)
- [구현 페이지](#구현-페이지)
- [기능 상세 설명](#기능-상세-설명)
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보
### 🛍️ 숍숍 오픈 마켓 서비스
숍숍 오픈 마켓 서비스는 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하고 구매자는 구매, 결제하는 서비스입니다.
<br>

**구현 기간 : 2023.10.10 ~ 2023.11.30** <br>

**배포 사이트 :**  <strong>[배포 URL 바로가기](https://shopx2.netlify.app)</strong>

> **테스트 계정   ↓** <br>
> | 구매자 ID | 구매자 PW |
> | :---: | :---: |
> |`buyer1`|`hodu0910`|
> 
>| 판매자 ID | 판매자 PW |
>| :---: | :---: |
>|`seller1`|`hodu0910`|

<br>
<br>
<br>


## 폴더 구조
```
🛍️ SHOP-SHOP
├─ 📦 public
│  ├─ 🧾 _redirects
│  ├─ ⭐ favicon.ico
│  └─ 📄 index.html
├─ 📦 src
│  ├─ 📂 api
│  ├─ 📂 assets
│  │  ├─ 📂 icons
│  │  └─ 📂 images
│  ├─ 📂 auth
│  ├─ 📂 components
│  │  ├─ 📂 CartBox
│  │  ├─ 📂 common
│  │  │  ├─ 📂 Button
│  │  │  ├─ 📂 Footer
│  │  │  ├─ 📂 Header
│  │  │  ├─ 📂 Loading
│  │  │  ├─ 📂 MetaTag
│  │  │  └─ 📂 Modal
│  │  ├─ 📂 DropDown
│  │  ├─ 📂 Login
│  │  ├─ 📂 PaymentBox
│  │  ├─ 📂 ProductDetail
│  │  ├─ 📂 ProductList
│  │  ├─ 📂 SellerItem
│  │  ├─ 📂 SignUp
│  │  └─ 📂 Slider
│  ├─ 📂 pages
│  │  ├─ 📂 CartPage
│  │  ├─ 📂 ErrorPage
│  │  ├─ 📂 HomePage
│  │  ├─ 📂 LoginPage
│  │  ├─ 📂 PaymentPage
│  │  ├─ 📂 ProductPage
│  │  ├─ 📂 ProductUploadPage
│  │  ├─ 📂 SearchPage
│  │  ├─ 📂 SellerCenterPage
│  │  └─ 📂 SignUpPage
│  ├─ 📂 redux
│  │  ├─ 📂 Slices
│  │  └─ 📜 store.js
│  ├─ 📂 routes
│  ├─ 📂 services
│  ├─ 📂 styles
|  ├─ 📜 App.js
|  ├─ 📜 axios.js
|  └─ 📜 index.js
```

<br>
<br>
<br>

## 사용 기술

#### [ FrontEnd ]
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white">
</div>

<br>

#### [ BackEnd ]
**제공된 API 사용**

<br>

#### [ Version ]
```
"@reduxjs/toolkit": "^1.9.6",
"axios": "^1.5.0",
"react": "^18.2.0",
"react-cookie": "^6.1.1",
"react-daum-postcode": "^3.1.3",
"react-dom": "^18.2.0",
"react-helmet-async": "^2.0.4",
"react-hook-form": "^7.46.2",
"react-loading-skeleton": "^3.3.1",
"react-redux": "^8.1.3",
"react-router-dom": "^6.16.0",
"react-scripts": "5.0.1",
"react-slick": "^0.29.0",
"react-spinners": "^0.13.8",
"slick-carousel": "^1.8.1",
"styled-components": "^5.3.11",
"styled-normalize": "^8.0.7",
```
<br>
<br>
<br>

## 구현 페이지
### 💻 PC ver.
|   구매자 로그인   |   구매자 회원가입    |
| :---------: | :---------: |
| ![구매자로그인](https://github.com/hyeonbinnn/shop-shop/assets/117449788/3e386a35-702d-49bc-868d-d8efeee65edd) | ![구매자 회원가입](https://github.com/hyeonbinnn/shop-shop/assets/117449788/dc0fcc75-2e11-44c4-917b-3eb6cb7cb980) |
<br>

|   판매자 로그인   |   판매자 회원가입    | 
| :---------: | :---------: |
| ![판매자로그인](https://github.com/hyeonbinnn/shop-shop/assets/117449788/7b914d28-c017-43bb-92a4-b6b7ba27d3d2) | ![판매자 회원가입](https://github.com/hyeonbinnn/shop-shop/assets/117449788/1d4b06de-1e7f-465c-b090-2dbfe915f5d3) |
<br>

|   로그아웃   |   검색    | 
| :---------: | :---------: |
| ![로그아웃](https://github.com/hyeonbinnn/shop-shop/assets/117449788/6b4e21de-6c87-4ff7-b5e9-15acf95c789f) | ![검색](https://github.com/hyeonbinnn/shop-shop/assets/117449788/dc9501f5-a862-4029-9aca-eac08fe66ddf) |
<br>

|  판매자 로그인 시    |  비로그인 시    | 
| :---------: | :---------: |
| ![판매자 로그인 시](https://github.com/hyeonbinnn/shop-shop/assets/117449788/3eb65caf-50cf-4da3-9ee5-fc477c05d5a0) | ![비로그인 시](https://github.com/hyeonbinnn/shop-shop/assets/117449788/a076fd73-7f3c-4e15-af54-c48c09e7d0ca) |
<br>

|    구매자 로그인 시   |   구매자 장바구니 수량 수정    | 
| :---------: | :---------: |
| ![구매자 로그인 시](https://github.com/hyeonbinnn/shop-shop/assets/117449788/8b99dd10-1d71-4222-9b8b-101979eebe78) | ![구매자 수량 수정](https://github.com/hyeonbinnn/shop-shop/assets/117449788/418933c7-468c-4fbe-93cf-048eb7c2619e) |
<br>

|   구매자 장바구니 수량 누적   |    구매자 장바구니 삭제    | 
| :---------: | :---------: |
| ![구매자 수량 누적](https://github.com/hyeonbinnn/shop-shop/assets/117449788/34a0afab-5e3c-4b96-9662-82ce46aa1af4) | ![구매자 장바구니 삭제](https://github.com/hyeonbinnn/shop-shop/assets/117449788/fa3ba55e-8739-4985-a026-f6e0a0026c7a) |
<br>

|   구매자 장바구니 개별 주문   |   구매자 장바구니 전체 주문    | 
| :---------: | :---------: |
| ![구매자 장바구니 개별 주문](https://github.com/hyeonbinnn/shop-shop/assets/117449788/3728aad5-b1ae-4c59-991f-cfecd4e1e5fa) | ![구매자 장바구니 전체 주문](https://github.com/hyeonbinnn/shop-shop/assets/117449788/4bf6095a-79aa-40d3-a346-e28fd72ee479) |
<br>

|  구매자 장바구니 결제    | 판매자 상품 등록 |
| :---------: | :---------: |
|  ![구매자 장바구니 결제](https://github.com/hyeonbinnn/shop-shop/assets/117449788/7c31cda8-bf9a-4995-93c1-b47f06f29db1) | ![판매자 상품 등록](https://github.com/hyeonbinnn/shop-shop/assets/117449788/cc94f38b-7d8c-4d15-b2e6-7b3fbd22512c) |
<br>

|    판매자 상품 수정    |   판매자 상품 삭제    | 
| :---------: | :---------: |
| ![판매자 상품 수정](https://github.com/hyeonbinnn/shop-shop/assets/117449788/c707d653-8f0c-44df-916c-958c707699d5) | ![판매자 상품 삭제](https://github.com/hyeonbinnn/shop-shop/assets/117449788/221699b4-2575-45b4-9219-467766c7866f) |
<br>

|   404 Error   |   ComingSoon    | 
| :---------: | :---------: |
|  ![404 Error](https://github.com/hyeonbinnn/shop-shop/assets/117449788/466b93af-9958-423f-9cc2-af776071ec45)  |  ![comingsoon](https://github.com/hyeonbinnn/shop-shop/assets/117449788/c895bba9-7b92-48cb-b8db-2f85df857cd3)  |

<br>
<br>
<br>

## 기능 상세 설명
### 1. 메인 홈 페이지
- 상품 목록에서 상품을 클릭하면, 해당 상품 상세 페이지로 이동합니다.
- 로그인 유형(구매자, 판매자, 비로그인)에 따라 상단 헤더 메뉴가 달라집니다.
  * 구매자, 비로그인 : 장바구니, 마이페이지 아이콘 (비로그인 회원은 클릭 시 바로 로그인 페이지로 이동)
  * 판매자 : 마이페이지, 판매자 센터 아이콘
- 마이페이지 아이콘 클릭 시, 마이페이지 이동 기능과 로그아웃 기능이 있는 드롭다운 박스가 나타납니다.
- 페이지 상단 검색창에 검색 단어를 입력하게 되면 검색 단어가 포함된 제품명 목록이 나타납니다.
- 검색 결과 상품을 클릭하면 해당 상품의 상세 페이지로 이동합니다.

<br>

### 2. 로그인, 회원가입 페이지
#### ✔️ 로그인
- 구매자 : 구매 회원 로그인 탭을 클릭하면 구매 회원으로 로그인합니다.
- 판매자 : 판매 회원 로그인 탭을 클릭하면 판매 회원으로 로그인합니다.
- 아이디나 비밀번호가 일치하지 않거나, 아이디나 비밀번호를 입력하지 않은 채 로그인 버튼을 누르면 경고 문구가 나타납니다.
- 입력 창 아래에 경고 문구가 나타나면 로그인 버튼을 눌러도 로그인 되지 않습니다.
- 입력 창에 입력이 안된 부분이 존재한 채로 로그인 버튼을 누르면 입력되지 않은 입력 창에 focus 이벤트가 작동되고 로그인은 되지 않습니다.
- 로그인 성공할 시, 메인 홈 페이지로 이동합니다.

<br>

#### ✔️ 회원가입
- 구매자 : 구매 회원 가입 탭을 클릭하면 구매 회원으로 회원가입이 됩니다.
- 판매자 : 판매 회원 가입 탭을 클릭하면 판매 회원으로 회원가입이 됩니다.
- 회원가입 할 때는 모든 입력을 완료하고, 동의하기 체크를 눌러야만 회원가입이 가능합니다.
- 아이디의 중복 확인 버튼을 눌렀을 때, 중복이 된다면 입력창 아래 빨간색 경고 문구가 나타납니다.
- 비밀번호와 비밀번호 재확인의 유효성 검사를 통과하면 파란색 통과 문구와 활성화된 아이콘 표시, 통과하지 못하면 빨간색 경고 문구가 나타납니다.
  * 유효성 검사 규칙 : 비밀번호는 8-16자의 영문 대소문, 숫자, 특수문자를 사용해 주세요.
- 그 외 모든 입력창의 칸이 비어있을 시, 경고 문구가 나타납니다.
- 회원 정보 입력 후, 회원가입 버튼을 누르면 로그인 페이지로 이동합니다.

<br>

### 3. 상품 목록 페이지
- 메인 페이지의 상품 목록에서 상품을 클릭하면 상품 상세 페이지로 이동합니다.
- 상품 목록의 상품에는 상품 판매자, 상품명, 가격, 하트가 보여집니다.

<br>

### 4. 상품 상세 페이지
- `productId`에 해당하는 상품을 불러오고, 해당 상품 정보를 보여줍니다.
- `+` 버튼과 `-` 버튼을 사용해야만 수량 변경이 가능합니다. 
- 수량을 변경할 때 현재 상품의 재고 수량을 초과하면 `+` 버튼이 비활성화됩니다.
- 수량 1 일 때, `-` 버튼을 누르면 최소 주문 수량 경고창이 뜹니다.
- 선택된 옵션에 맞춰서 가격을 계산하고, 총 가격이 나타나야 합니다.
- 바로 구매 버튼을 눌렀을 시, 결제 페이지로 넘어갑니다.
- 장바구니 버튼을 눌렀을 시, 장바구니에 상품이 추가되고 장바구니 페이지로 이동합니다.
- 비로그인 사용자는 장바구니, 바로 구매를 클릭했을 시 로그인 해달라는 모달창이 떠야합니다.
- 판매자는 장바구니, 바로 구매, 수량 버튼이 비활성되어 있습니다.

<br>

### 5. 장바구니 페이지
- 장바구니에서 상품의 수량을 수정할 때, `+`, `-` 버튼을 누르면 수량 수정을 위한 모달창이 나타납니다.
  * 모달창에서 상품의 재고 수량을 초과하면 `+` 버튼이 비활성화되고, 수량이 1 일 때 `-` 버튼을 누르면 경고창이 뜹니다.
- 선택된 정보만 총 상품금액과 할인, 배송비가 적용되어 총 결제할 가격이 나타나야 합니다.
- 상품의 `x` 버튼을 클릭할 시, 상품 삭제를 재확인하는 모달창이 중앙에 나타나고 상품이 삭제되어야 합니다.
- 이미 장바구니에 있는 상품을 다시 넣을 경우, 이전 수량과 합쳐집니다.

<br>

### 6. 주문 / 결제 페이지
- 주문 / 결제 페이지에서 상품 정보 수정 불가합니다.
- 배송 정보 칸에 주문자 정보와 배송지 정보를 입력할 수 있습니다.
- 모든 입력이 완료되어야 결제하기 버튼이 활성화 됩니다.
- 결제하기 버튼을 누르면 결제가 진행되고, 완료됐다는 창이 뜬 후 메인 홈 페이지로 이동합니다.

<br>

### 7. 판매자 센터 페이지
- 상품 업로드 페이지에서 등록한 상품들이 판매 상품 목록에 보여집니다.
- 수정 버튼을 누르면 상품 업로드 페이지로 이동하며, 상품 업로드 페이지에 `productId` 등록한 상품에 해당하는 상품의 내용이 보여집니다.
- 삭제 버튼을 누르면 삭제를 재확인하는 모달창이 나타나고, 삭제 버튼을 누르면 상품이 삭제됩니다.

<br>

### 8. 판매자 상품 업로드 페이지
- 상품 이미지를 등록할 수 있습니다 (상품 상세 페이지와 상품 목록 페이지에서 보여질 이미지)
- 상품명, 판매가, 기본 배송비, 재고 모두 입력 가능합니다. 
- 상품명은 20자로 제한합니다.
- 상품 상세 정보를 입력하는 칸에 상품에 관한 설명을 적을 수 있습니다.
- 저장하기 버튼을 누르면 상품 등록이 완료되며, 상품 상세 페이지로 이동합니다.

<br>
<br>
<br>

## 트러블 슈팅
### ✔️ Redux -> Redux-Toolkit으로 전환해 코드의 복잡성 줄이기
리덕스 툴킷 사용 전에는 순수 리덕스로 각 액션 유형마다 액션 생성자 함수를 만들고, 각 리듀서는 해당 액션 유형에 따라 상태를 업데이트했습니다. <br>

그러나 리덕스 툴킷으로 전환 후, `createSlice` 함수를 사용해 별도의 액션 타입을 정의할 필요 없이, 슬라이스 리듀서 함수를 작성해 간결한 코드로 작성할 수 있고, 각각의 슬라이스에 대한 리렌더링을 최소화할 수 있습니다. 또 내부적으로 Immer 라이브러리를 사용해 불변성을 유지하기 때문에 더 직관적으로 상태를 업데이트할 수 있습니다.
<br>
<br>

#### [ 변경 전 ]
```js
// ActionTypes.js
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_CARTS = 'SET_CARTS';
```
```js
// Actions.js
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const setCarts = (carts) => ({
  type: SET_CARTS,
  payload: carts,
});
```
```js
// Reducers.js
const initialState = {
  products: [],
  carts: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    default:
      return state;
  }
};
```
<br>

#### [ 변경 후 ]
```js
// slces.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  carts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const productDetailSlice = createSlice({
  name: 'productsDetail',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productDetailSlice.actions;

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { setCarts } = cartSlice.actions;
```
<br>
<br>

컴포넌트에서 사용할 때는 일단 `useEffect` 내부에서 api 파일에서 가져온 `getAllProduct` 함수를 호출해 서버에서 상품 목록을 가져옵니다. <br>

데이터가 성공적으로 가져와지면, `dispatch` 를 사용해 `setProducts` 액션을 호출해 상태를 업데이트하고, 가져온 상품 목록은 `useSelector` 훅을 사용해 상태를 가져오게 됩니다.
<br>
<br>

```jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './ProductList.style';
import { getAllProduct } from '../../api/product';
import { setProducts } from '../../redux/slices/slices';
import Loading from '../common/Loading/Loading';
import heart from '../../assets/icons/icon-heart.svg';
import heartOn from '../../assets/icons/icon-heart-on.svg';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [likedProduct, setLikedProduct] = useState({});

  useEffect(() => {
    getAllProduct()
      .then((response) => {
        dispatch(setProducts(response));
        setLoading(false);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
        setLoading(false);
      });
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  const toggleLike = (productId) => {
    setLikedProduct((prevLikedProduct) => ({
      ...prevLikedProduct,
      [productId]: !prevLikedProduct[productId],
    }));
  };

  return (
    <S.Container>
      {loading && <Loading />}
      <S.ProductList>
        {products &&
          products.map((item) => (
            <S.ProductItem
              key={item.product_id}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/productDetail/${item.product_id}`);
              }}
            >
              <S.ProductImg
                src={item.image}
                alt={item.product_name}
                loading={products.indexOf(item) < 3 ? 'eager' : 'lazy'}
              />
              <S.ProductStore>{item.store_name}</S.ProductStore>
              <S.ProductName className="product-name sl-ellipsis">
                {item.product_name}
              </S.ProductName>
              <S.LikeBtn
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(item.product_id);
                }}
              >
                {likedProduct[item.product_id] ? (
                  <S.LikeImg src={heartOn} alt="채워진 빨강 하트 아이콘" />
                ) : (
                  <S.LikeImg src={heart} alt="빈 하트 아이콘" />
                )}
              </S.LikeBtn>
              <S.ProductPrice>
                <strong>
                  {item.price.toLocaleString()}
                  <span>원</span>
                </strong>
              </S.ProductPrice>
            </S.ProductItem>
          ))}
      </S.ProductList>
    </S.Container>
  );
};

export default ProductList;
```

<br>
<br>

### ✔️ API 파일 구조화
API 관련 파일을 각각의 기능 또는 역할에 따라 분리하여 **cart.js, order.js, product.js, seller.js, useAuth.js** 파일로 나누었습니다. 특히 판매자와 구매자가 나누어져 있기에 이렇게 파일을 분리하면 코드의 모듈성과 가독성을 높일 수 있습니다. 
<br>

각 파일은 특정한 기능 또는 역할을 담당하고 있으며, 해당 기능과 관련된 API 요청을 처리합니다. 이러한 구조를 통해 코드베이스를 관리하기 쉽고, 협업할 때도 각 파일이 어떤 역할을 수행하는지 명확히 파악할 수 있습니다.
<br>

또한 새로운 기능이나 엔드포인트를 추가할 때 해당 파일만 수정하면 되므로 다른 파일에 영향을 미치지 않아 코드의 일부를 변경하거나 확장할 때 발생할 수 있는 위험을 최소화할 수 있습니다.
<br>
<br>

![제목 없음](https://github.com/hyeonbinnn/shop-shop/assets/117449788/bc12471a-800f-4cce-8ebc-a86bf63a20df)

<br>
<br>

아래를 예시로 사용할 때는 axios 라이브러리를 기반으로 생성한 인스턴스를 import 해서 상품 데이터를 서버로부터 가져오는 비동기 함수를 만들고, `axiosInstance`를 사용해 서버의 엔드포인트로 GET 요청을 합니다. 그리고 try / catch 문을 사용해 예외처리 합니다.
<br>

상품 목록을 가져오는 컴포넌트에서 사용할 때 ProductList 컴포넌트 코드를 보면, 위 설명과 동일하게 `getAllProduct` 함수를 호출해 서버에서 상품 목록을 가져오면 됩니다.
<br>
<br>

```js
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
```
```jsx
import { getAllProduct } from '../../api/product';

const ProductList = () => {
  useEffect(() => {
    getAllProduct()
      .then((response) => {
        dispatch(setProducts(response));
        setLoading(false);
      })
      .catch((error) => {
        console.error('데이터 불러오는 중 에러 발생', error);
        setLoading(false);
      });
  }, [dispatch]);
  
  return ( 
    ... 
  );
};  
```

<br>
<br>

### ✔️ 장바구니 업데이트 반영 오류
#### 조건
장바구니 즉, `CartButton`을 눌렀을 때, 만약 사용자가 로그인하지 않았다면 `openLoginModal`을 호출하고, 그게 아니면 `addCart` 함수를 호출합니다. 동일한 상품이 경우, `/cart` 페이지로 이동 시 이미 존재하는 상품의 변경된 수량의 업데이트가 반영되어야 하고, 다른 상품일 경우 바로 추가되어야 합니다.
<br>
<br>

#### 문제점
장바구니 버튼을 눌렀을 때, `/cart` 페이지로 이동한 뒤 동일한 상품인데도 변경된 수량의 업데이트가 반영되지 않고, 새로고침을 해야지만 업데이트가 반영되는 상황이 발생합니다.
<br>
<br>

#### 해결 방안
리덕스 툴킷으로 만들어 둔 `carts` 장바구니를 이용해서 업데이트 해야하는데, 혼자 `useState` 훅로 상태를 만들어서 장바구니 업데이트하려 했습니다.
<br>
<br>

#### [ 문제 코드 수정 전 ]
```jsx
// 해당 컴포넌트에서 문제의 코드를 간추려 모아보면...

// 나는 왜 장바구니 상태를 또 만들고 있는가?
const [cart, setCart] = useState([]);


// postAddCart 함수를 호출하고, 
// 해당 함수가 완료되면 navigate가 실행되지만, 비동기 처리가 아님
const addCart = () => {
    postAddCart(token, product_id, quantity).then(() => {
      navigate('/cart');
    });
  };


// getCartList 함수를 호출하고, 
// 해당 함수가 반환하는 Promise를 관리하지 않아서,
// 함수 내에서 어떤 작업이 이루어져도 완료 여부에 대한 처리가 없음
useEffect(() => {
  getCartList(token);
}, [token]);
```
<br>

#### [ 문제 코드 수정 후 ]
```jsx
// 일단 필요한 모듈을 임포트하자
import { useDispatch } from 'react-redux';
import { setCarts } from '../../../redux/slices/slices';


// useDispatch 훅을 이용해 Redux의 store로부터 dispatch 함수를 얻어오자
const dispatch = useDispatch();


// addCart 함수를 비동기 처리하자
const addCart = async () => {
  try {
    postAddCart(token, product_id, quantity).then(() => {
      navigate('/cart');
    });
  } catch (error) {
    console.error('장바구니에 추가 중 에러 발생', error);
  }
};


// getCartList 함수를 호출하고, 
// 해당 함수가 반환하는 Promise가 완료될 때까지 대기하고 있으며, 
// Promise가 완료되면 then 블록이 실행되어 dispatch가 호출됨
// 비동기 작업이 완료된 후에 Redux 상태를 업데이트할 수 있음
useEffect(() => {
    getCartList(token).then((cartData) => {
      dispatch(setCarts(cartData)); // cartData 변수에 카트 정보를 저장
    });
  }, [token, dispatch]);

```
<br>
<br>


### ✔️ 이미지 슬라이더 로딩 시간
#### 문제점
`Netlify`에 배포 후, 사이트에 들어가면 등장하는 메인 홈 페이지에서 슬라이더 이미지가 나타나기까지 로딩 시간이 너무 걸립니다. 
<br>

일단 이미지 크기가 커서 로딩 시간이 길어지기에 한국인이라면 끄고 다시 들어가기를 무한 반복할 것임이 분명합니다. 그리고 문제는 다시 들어가도 여전히 로딩 시간이 오래 걸립니다.
<br>
<br>

#### 해결 방안
이미지 포맷 최적화를 해보려 합니다. 현재 배너 이미지 슬라이더 포맷은 전부 `SVG`입니다. `SVG`는 벡터 그래픽 형식으로 해상도에 따라 확대 / 축소에 적합하지만, 일반적으로 파일 크기가 크고, 특히 복잡한 이미지의 경우 로딩 시간이 오래 걸릴 수 있기에 배너 이미지일 경우 `JPEG` 혹은 `WebP`를 고려하는게 맞습니다.
<br>

**WHY?** 이 또한 근거를 살펴보니, `JPEG`는 비트맵 이미지로 파일 크기를 줄이고 모든 브라우저에서 지원되고, `WebP`는 `JPEG`보다 높은 압축률을 제공하면서도 더 높은 품질을 유지할 수 있지만, 모든 브라우저에서 지원되지는 않으니 조심합시다.
<br>

이제 파일 형식을 변환해 봅시다! 이름 모를 곳에서 변환하려는데 파일 크기가 너무 커서 실패했기에 [https://convertio.co/kr/](https://convertio.co/kr/image-converter/) 여기서 파일 형식을 변환했습니다. 그리고 나서 [https://kraken.io/](https://kraken.io/) 여기서 이미지 크기를 압축하면 됩니다.
<br>
<br>

![image](https://github.com/hyeonbinnn/shop-shop/assets/117449788/7578d22e-1858-45d9-8a47-ce6919d90d7d)

```jsx
import banner1 from '../../assets/images/banner1.svg';
import banner2 from '../../assets/images/banner2.svg';
import banner3 from '../../assets/images/banner3.svg';
import banner4 from '../../assets/images/banner4.svg';
import banner5 from '../../assets/images/banner5.svg';

↓ ↓ ↓

import banner1 from '../../assets/images/banner1.webp';
import banner2 from '../../assets/images/banner2.webp';
import banner3 from '../../assets/images/banner3.webp';
import banner4 from '../../assets/images/banner4.webp';
import banner5 from '../../assets/images/banner5.webp';
```
<br>
<br>

이미지 **Lazy Loading** 설정은 브라우저에게 해당 이미지를 레이지 로딩으로 처리하도록 알려주는데, 이 속성은 이미지가 뷰포트에 나타날 때까지 로딩을 지연시키고, 사용자 경험을 향상시켜준다고 합니다.
<br>

현재 코드에서는 이미지를 `useEffect` 훅을 통해 로딩하고, Skeleton 컴포넌트를 사용하여 로딩 중에는 스켈레톤을 보여주고, 로딩이 완료되면 실제 이미지를 렌더링하고 있으며 이미지 슬라이더의 이미지들이 순차적으로 전환되는 상황이고, 이미지 슬라이더 자체에 자동 전환 기능이 포함되어 있습니다.
<br>

각 이미지에 `loading="lazy"` 속성을 직접 추가하려 했는데, 메인 홈 페이지 같이 첫 시작 페이지에서의 배너 이미지는 일반적으로 중요한 이미지들을 즉시 로드하고자 할 때가 많기에 첫 번째 이미지는 즉시 로드되고, 나머지 이미지들은 레이지 로을 통해 필요한 시점에 로드되도록 힙니다.
<br>
<br>

```jsx
<img key={i} src={img.src} alt={img.alt} />

↓ ↓ ↓

<img key={i} src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} />
```
<br>
<br>

이제 사이트를 들어가면 로딩없이 바로 이미지 슬라이더가 나타나는 것을 알 수 있습니다!
<br>
<br>

![image](https://github.com/hyeonbinnn/shop-shop/assets/117449788/ff29c0b3-2cc4-480c-85bf-177fb0f74984)

<br>
<br>

그 외에도 현재 로딩 시에 react-loading-skeleton을 통해 스켈레톤을 적용했는데, 이게 개발 환경에서는 유용할 수 있지만, 실제 사용자에게 서비스를 제공할 때는 성능 저하를 가져올 수 있다고 합니다. 
<br>

그래서 로딩 시에는 간단한 스피너를 사용하거나, 필요한 경우에만 react-loading-skeleton을 사용하는 것을 고려해야 하는데 라이브러리를 슬라이더에서만 아주 조금 사용하고 있기에 패스합니다!
<br>
<br>
<br>
