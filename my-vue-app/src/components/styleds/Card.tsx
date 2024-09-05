import styled from "styled-components"


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 16px;
    max-width: 320px;
    padding: 20px;

    h1{
        color: #BF4F74;
    }

    @media screen and (max-width: 760px){
        margin: 20px 0;
    }
`;