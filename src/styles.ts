import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  size_font: "1.6rem",
  size_border_radius: "3px",

  color_background: "#3179ba",
  color_column: "#ebecf0",
  color_font: "#000000",
  color_card_bg: "#ffffff",
  color_button: "#5aac44",
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