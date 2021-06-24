import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./index.css";
import Button from "@material-ui/core/Button";
import App from "./App";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
      dark: deepOrange[600],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
        textTransform: "normal",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
