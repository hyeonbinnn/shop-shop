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
- [트러블 슈팅](#트러블-슈팅)

<br>
<br>
<br>

## 프로젝트 정보

> ### 🛒 SHOPSHOP : 숍숍 오픈 마켓 서비스 
> **구현 기간 :**  `2023.10.01 ~ 2023.11.30` <br>
>
> **배포 사이트 :**  <strong>[`배포 URL 바로가기`](https://shopx2.netlify.app)</strong>
>
> **테스트 계정  ↓** <br>
>
>   **👩🏻‍💻 구매자 - `ID : buyer1 PW : hodu0910`** <br>
>
>   **🙋🏻‍♀️ 판매자 - `ID : seller1 PW : hodu0910`** <br>


<br>
<br>
<br>


## 폴더 구조
```
🛒 SHOP-SHOP
├─ 📦 public
│  ├─ 🧾 _redirects
│  ├─ ⭐ favicon.ico
│  └─ 📃 index.html
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
│  │  │  └─ 📂 Modal
│  │  ├─ 📂 DropDown
│  │  ├─ 📂 Login
│  │  ├─ 📂 PaymentBox
│  │  ├─ 📂 ProductDetail
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
│  │  └─ 📜 cookies.js
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
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled components&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white">
</div>

<br>

#### [ BackEnd ]
제공된 API 사용

<br>

#### [ Version ]
```
"@reduxjs/toolkit": "^1.9.6",
"axios": "^1.5.0",
"react": "^18.2.0",
"react-cookie": "^6.1.1",
"react-daum-postcode": "^3.1.3",
"react-dom": "^18.2.0",
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
|  | |


|   판매자 로그인   |   판매자 회원가입    | 
| :---------: | :---------: |
| | |


|   판매자 로그인   |   판매자 회원가입    | 
| :---------: | :---------: |
|  |  |

<br>
<br>

### 📱 mobile ver.

|   메인, 소개   |   서비스, 게시판, 지도    |
| :---------: | :---------: |
|  |  |


<br>
<br>
<br>

## 트러블 슈팅
### ✔️ 장바구니 업데이트 반영 오류
#### 조건
- 장바구니 즉, `CartButton`을 눌렀을 때, 만약 사용자가 로그인하지 않았다면 `openLoginModal`을 호출하고, 그게 아니면 `addCart` 함수를 호출한다.

- 동일한 상품이 경우, `/cart` 페이지로 이동 시 이미 존재하는 상품의 변경된 수량의 업데이트가 반영되어야 하고, 다른 상품일 경우 바로 추가되어야 한다.

<br>

#### 문제점
- 장바구니 버튼을 눌렀을 때, `/cart` 페이지로 이동한 뒤 동일한 상품인데도 변경된 수량의 업데이트가 반영되지 않고, 새로고침을 해야지만 업데이트가 반영되는 상황이 발생했다.

<br>


#### 해결 방안
- 리덕스 툴킷으로 만들어 둔 `carts` 장바구니를 이용해서 업데이트 해야하는데, 혼자 `useState`로 상태를 만들어서 장바구니 업데이트하려 했다.

<br>

##### [ 문제 코드 수정 전 ]
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

##### [ 문제 코드 수정 후 ]
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
- `Netlify`에 배포 후, 사이트에 들어가면 등장하는 메인 홈 페이지에서 슬라이더 이미지가 나타나기까지 로딩 시간이 너무 걸린다. 

- 일단 이미지 크기가 커서 로딩 시간이 길어지는 것 같다. 한국인이라면 끄고 다시 들어가기를 무한 반복할 것임이 분명하다. 그리고 문제는 다시 들어가도 여전히 로딩 시간이 오래 걸린다.

<br>

#### 해결 방안
- 이미지 포맷 최적화를 해보려고 한다. 나의 배너 이미지 슬라이더 포맷은 전부 `SVG`다. `SVG`는 벡터 그래픽 형식으로 해상도에 따라 확대/축소에 적합하지만, 일반적으로 파일 크기가 크고, 특히 복잡한 이미지의 경우 로딩 시간이 오래 걸릴 수 있기에 배너 이미지일 경우 `JPEG`를 고려하는게 맞다. <br><br> `WHY?` 이 또한 근거를 살펴보니, `JPEG`는 비트맵 이미지로 파일 크기를 줄이고 품질을 조절할 수 있는 장점이 있어서다. 이제 파일 형식을 변환해 보자! 이름 모를 곳에서 변환하려는데 파일 크기가 너무 커서 실패했기에 `https://convertio.co/kr/` 여기서 파일 형식을 변환했다. 그리고 나서 `https://kraken.io/` 여기서 이미지 크기를 최적화하려 했지만, `banner2`가 아직도 크다고 한다. 친절하게 PRO로 업그레이드 하라지만, 술수에 넘어가지 않고 나머지만 최적화 시킨다.
<br>

![image](https://github.com/hyeonbinnn/shop-shop/assets/117449788/7578d22e-1858-45d9-8a47-ce6919d90d7d)

```jsx
    import banner1 from '../../assets/images/banner1.svg';
    import banner2 from '../../assets/images/banner2.svg';
    import banner3 from '../../assets/images/banner3.svg';
    import banner4 from '../../assets/images/banner4.svg';
    import banner5 from '../../assets/images/banner5.svg';

    ↓ ↓ ↓

    import banner1 from '../../assets/images/banner1.jpeg';
    import banner2 from '../../assets/images/banner2.jpeg';
    import banner3 from '../../assets/images/banner3.jpeg';
    import banner4 from '../../assets/images/banner4.jpeg';
    import banner5 from '../../assets/images/banner5.jpeg';
```

<br>
<br>

- 이미지 `Lazy Loading` 설정은 브라우저에게 해당 이미지를 레이지 로딩으로 처리하도록 알려주는데, 이 속성은 이미지가 뷰포트에 나타날 때까지 로딩을 지연시키고, 사용자 경험을 향상시켜준다고 한다.<br><br>
현재 코드에서는 이미지를 `useEffect`를 통해 로딩하고, `Skeleton` 컴포넌트를 사용하여 로딩 중에는 스켈레톤을 보여주고, 로딩이 완료되면 실제 이미지를 렌더링하고 있으니까 각 이미지에 `loading="lazy"` 속성을 직접 추가하여 브라우저가 최적의 로딩을 택할 수 있도록 코드를 수정해 본다. <br><br>
아래를 보면 이제 로딩없이 사이트를 들어가면 바로 이미지 슬라이더가 나타나는 것을 알 수 있다.
```jsx
    <img key={i} src={img.src} alt={img.alt} />

    ↓ ↓ ↓

    <img key={i} src={img.src} alt={img.alt} loading="lazy" />
```
![image](https://github.com/hyeonbinnn/shop-shop/assets/117449788/ff29c0b3-2cc4-480c-85bf-177fb0f74984)

<br>
<br>

- 그 외에도 현재 로딩 시에 `react-loading-skeleton`을 통해 스켈레톤을 적용했는데, 이게 개발 환경에서는 유용할 수 있지만, 실제 사용자에게 서비스를 제공할 때는 성능 저하를 가져올 수 있다고 한다. 
그래서 로딩 시에는 간단한 스피너를 사용하거나, 필요한 경우에만 `react-loading-skeleton`을 사용하는 것을 고려해야 하는데 라이브러리를 슬라이더에서만 아주 조금 사용하고 있기에 패스한다.
