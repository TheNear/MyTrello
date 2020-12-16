import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  size_font: "1.6rem",

  color_background: "#3179ba",
  color_column: "#ebecf0",
  color_font: "#000000"
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${theme.size_font};
    color: ${theme.color_font}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color_background};
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem;
  width: 100%;
`;
