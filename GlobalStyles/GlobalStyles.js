import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        padding-bottom: 3rem; 
        font-family: Helvetica, Arial, sans-serif;     
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
