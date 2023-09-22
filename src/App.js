import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
export default App;
