import styled from "styled-components";

interface TitleProps {
  color: "pink" | "white";
}
                              //passamos o tipo da interface 
export const Title = styled.h1<TitleProps>`
                    // aqui no h1 especificamos a tag que iremos utilizar, se for uma linha por exemplo sera um hr, ou se for um h2 sera h2
  font-size: 30px;
  text-align: center;
  letter-spacing: 5px;
                     //condição              ? se for true : se for false
color: ${(props) => (props.color === "white" ? "#ffff": "#BF4F74")}; 
  //define que o titulo pode ser definido ou como branco ou como rosa
  //if ternario (if else comprimido)
`;