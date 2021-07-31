import React from "react";
import { CssBaseline } from "@material-ui/core";

import Intro from "../components/Home/Intro";
import Sections from "../components/Sections";
import PaperImage from "../components/Home/PaperImage";
import Process from "../components/Home/Process";
import PaperVideo from "../components/Home/PaperVideo";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Intro />
      <Sections maxWidth={"xl"} margin={"20em"}>
        <PaperImage />
        <Process />
        <PaperVideo />
      </Sections>
    </React.Fragment>
  );
}
