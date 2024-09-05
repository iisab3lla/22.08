import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './configs/global/GlobalStyled'
import { AppRoutes } from './configs/routes/AppRoutes'
import { DarkTheme } from './configs/themes/dark';
import { LightTheme } from './configs/themes/light';
// import { LightTheme } from './configs/themes/light';

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
