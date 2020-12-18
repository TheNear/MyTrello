import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import { AppStateProvider } from "./state/AppState/AppState";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppStateProvider>
        <App />
        <GlobalStyle />
      </AppStateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
