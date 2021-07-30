import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Intro from "../components/Home/Intro";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"xl"}>
        <Intro />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
    </React.Fragment>
  );
}
