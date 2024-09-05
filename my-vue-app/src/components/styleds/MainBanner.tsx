import styled from "styled-components";
// import image from '../../assets/background.jpg'
import image from '../../assets/background.png'


export const MainBanner = styled.section`
    width: 100%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 25px;

    /* background-color: #c2c2c2; */

    background: ${`url(${image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    

    p{
        color: white;
        font-size: 22px;
    }

    @media screen and (max-width: 768px){
        height: 100vh;
    }
`;