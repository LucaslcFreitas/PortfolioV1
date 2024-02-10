import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
    font-family: 'Lexend Exa', sans-serif;
  }
  p {
    color: ${({ theme }) => theme.colors.paragraph};
    font-family: 'Lexend Exa', sans-serif;
  }
`;

export default GlobalStyles;
