import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./hooks/useAuth";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { deepOrange, grey, purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
      light: grey[200],
      dark: grey[800],
    },
    secondary: {
      main: "#f13",
    },
    background: {
      default: "hsl(0, 0%, 10%)",
      paper: "hsl(0, 0%, 14%)",
    },
  },
  typography: {
    fontWeightBold: 700,
    fontSize: 15,
    h2: {
      fontSize: "60px",
    },

    subtitle1: {
      color: grey[400],
    },

    fontFamily: ["Helvetica"].join(","),
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
