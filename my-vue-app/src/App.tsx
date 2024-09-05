import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './configs/global/GlobalStyled'
import { AppRoutes } from './configs/routes/AppRoutes'
import { LightTheme, DarkTheme } from './configs/themes';

function App() {
  return (
    //envolvemos o contudo com o theme provider para podermos alterar o tema da pagina 
    <ThemeProvider theme={LightTheme}>
      <AppRoutes/>
      <GlobalStyle/>
    </ThemeProvider>
  )
};

export default App;
