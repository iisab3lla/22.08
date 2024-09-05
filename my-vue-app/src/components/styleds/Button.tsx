import styled from "styled-components"

export const Button = styled.button`
    color:#BF4F74;
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px ${(props) => props.theme.primaryColor} solid;
    border-radius: 8px;
    padding: 12px 24px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: ${(props) => props.theme.primaryColor};
        color: black;
        border: 1px ${(props) => props.theme.primaryColor} solid;
        box-shadow: 0 0 0 1px rgb(1, 1, 1, 1);
    }

`;