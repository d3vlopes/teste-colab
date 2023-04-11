import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    display: block;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.neutral["100"]};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.sizes.base};
  }

  button {
    cursor: pointer;
  }
  
`;
