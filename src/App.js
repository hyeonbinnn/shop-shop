import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import ScrollTopButton from './components/common/Button/ScrollTopButton';
import MetaTag from './components/common/MetaTag/MetaTag';

function App() {
  const metaTagsProps = {
    title: 'SHOPSHOP',
    description: '숍숍 오픈 마켓에서 다양한 상품을 만나 보세요!',
    keywords: '마켓, 쇼핑몰, 상품, 홍보, 물건',
    url: 'https://shopx2.netlify.app/',
  };

  return (
    <ThemeProvider theme={theme}>
      <MetaTag {...metaTagsProps} />
      <GlobalStyle />
      <Router />
      <ScrollTopButton />
    </ThemeProvider>
  );
}
export default App;
