import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import heart from '../assets/icon/icon-heart.svg';

const GlobalStyle = createGlobalStyle`
${normalize}

body {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  * {
  margin: 0;
  padding: 0;
  line-height: 20px;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }

  table, thead, tbody, tr {
    display: block;
}

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, input {
    border: 0;
    vertical-align: baseline;
  }

  div, span, article, section, header, main, footer, p, ul, li, label, a, nav, h1, h2, h3, form, input, button, img, textarea, table, thead, tbody, tr, th, td {
    box-sizing: border-box;
  }

  ol, ul{
    list-style: none;
  }
  
  /* button 스타일 */
  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
  }

  /* 숨김 텍스트 처리 */
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  /* 한줄 말줄임 */
  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 두줄 말줄임 */
  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

    /* Image Replacement 약자 스크린리더가 읽을 수 있도록 대체텍스트 */
    .ir {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
  }

  /* 상품 이름 스타일 */
    .product-name {
      font-size: 18px;
      line-height: 22px;
    }

    /* 좋아요 버튼 */
    .like-btn {
      width: 22px;
      height: 22px;
      border: none;
      background: url(${heart}) no-repeat center / contain;
    }

  
`;

export default GlobalStyle;
