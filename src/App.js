import Router from './routes/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
export default App;
