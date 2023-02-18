import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #70db70;
        --green: #85e085;
        --green-medium: #adebad;
        --green-light: #d6f5d6;
        --white: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px){
            font-size: 87.05%; //14px
        }
    }
`