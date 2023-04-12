import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/routes/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Controls from "./pages/Controls";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

import { ThemeProvider } from "@material-ui/styles";
import { AuthProvider } from "./hooks/useAuth";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Montserrat:100,200,300,400,500,600,700,800,900",
          "Syncopate",
        ],
      },
    });
  }, []);

  const [theme, toggleDarkMode] = useDarkMode();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/controls">
              <Controls />
            </PrivateRoute>
            <PrivateRoute path="/data">
              <Data />
            </PrivateRoute>
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
