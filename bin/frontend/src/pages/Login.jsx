import React from "react";
import Form from "../components/Login/Form";
import boardLogin from "../images/boardLogin_black.png";
import { Background } from "../components/Background";
import { CssBaseline } from "@material-ui/core";

export default function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Form />
      <Background position="right bottom" image={boardLogin} />
    </React.Fragment>
  );
}
