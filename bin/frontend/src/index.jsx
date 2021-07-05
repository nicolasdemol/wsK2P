import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[600],
      dark: amber[700],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Lato",
      "Inter",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiButton: {
      root: {},
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
