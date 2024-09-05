import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: auto;
    width: 100%;
    height: auto;
    padding: 65px 0;

    max-width: 1444px;


    @media screen and (max-width: 760px){
        flex-direction: column;
    }
`