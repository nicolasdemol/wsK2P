import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./hooks/useAuth";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, blueGrey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      dark: blueGrey[700],
    },
    secondary: {
      main: "#DF2000",
      dark: red["A700"],
    },
  },
  typography: {
    fontWeightBold: 900,
    h2: {
      fontSize: "60px",
    },

    subtitle1: {
      color: blueGrey[500],
    },
    button: {
      fontWeight: "bold",
    },
    fontFamily: ["Lato"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
