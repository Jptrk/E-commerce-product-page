import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;  
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    body {
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 16px;
        overflow-x: hidden;
        
        button {
            font-family: 'Kumbh Sans', sans-serif;
            font-size: 16px;
        }

    }
`;

export default GlobalStyle;
