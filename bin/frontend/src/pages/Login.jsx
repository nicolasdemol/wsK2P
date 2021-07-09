import React from "react";
import Form from "../components/Login/Form";
import boardLogin from "../images/boardLogin.jpg";
import { Background } from "../components/Background";

export default function Login() {
  return (
    <React.Fragment>
      <Form />
      <Background position="right bottom" image={boardLogin} />
    </React.Fragment>
  );
}
