import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/routes/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Controls from "./pages/Controls";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:wght@900", "Syncopate:wght@700"],
      },
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/controls">
          <Controls />
        </PrivateRoute>
        <PrivateRoute path="/data">
          <Data />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
