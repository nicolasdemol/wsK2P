import React from "react";
import LoginForm from "../components/LoginForm";
import boardLogin from "../images/boardLogin_black.png";
import { Background } from "../components/Background";
import { CssBaseline } from "@material-ui/core";

export default function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <LoginForm />
      <Background position="right bottom" image={boardLogin} />
    </React.Fragment>
  );
}
