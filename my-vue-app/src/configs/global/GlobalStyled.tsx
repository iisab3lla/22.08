import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Moderustic", sans-serif;;
  }

  body{
    background-color: ${(props) => props.theme.backgroundColor};
    //usado para chamar os temas no corpo da pagina, esta acessando um objeto
    color: ${({theme}) => theme.textColor}
  }
`