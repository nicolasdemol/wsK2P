import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Faster One"],
      },
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>  
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
