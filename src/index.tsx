import React from "react";
import ReactDOM from "react-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import { AppStateProvider } from "./state/AppState/AppState";
import { DndProvider } from "react-dnd";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <AppStateProvider>
          <App />
          <GlobalStyle />
        </AppStateProvider>
      </DndProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
