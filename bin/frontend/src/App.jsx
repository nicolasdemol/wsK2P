import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Faster One", "Lato"],
      },
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
