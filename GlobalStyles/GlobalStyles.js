import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Satoshi-Variable';
  src: url('fonts/Satoshi/Satoshi-Variable.ttf') format('truetype');
       font-weight: 300 900;
       font-display: swap;
       font-style: normal;  
        }


    html,
    body {
        padding: 0;
        margin: 0;
        padding-bottom: 3rem; 
        font-family: 'Satoshi-Variable', Arial, Helvetica, sans-serif; 
    }


    * {
        box-sizing: border-box;
    }


    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
