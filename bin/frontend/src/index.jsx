import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./hooks/useAuth";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, amber, green } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[600],
      dark: amber[700],
    },
    secondary: {
      main: deepOrange[500],
      dark: deepOrange[700],
    },
  },
  typography: {
    h4: {
      fontWeight: "bold",
    },
    button: {
      fontWeight: "bold",
    },
    fontFamily: ["Muli"].join(","),
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
