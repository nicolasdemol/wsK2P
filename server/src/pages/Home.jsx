import React from "react";
import { CssBaseline } from "@material-ui/core";

import Intro from "../components/Home/Intro";
import Sections from "../components/Sections";
import PaperImage from "../components/Home/PaperImage";
import BigTitle from "../components/BigTitle";
import PaperVideo from "../components/Home/PaperVideo";
import Footer from "../components/Footer";
import Features from "../components/Home/Features";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Intro />
      <Sections maxWidth={"xl"} margin={"20vw"}>
        <PaperImage />
        <BigTitle
          title="Notre Process"
          subtitle="Optimisation Industrielle"
          text="Nous sommes une société française spécialisée dans le domaine de la
          manufacture de produits électroniques en Inde et en France. Notre
          processus repose sur la conception du produit, son industrialisation
          et son optimisation."
        >
          <Features />
        </BigTitle>

        <BigTitle title="Nos Services" subtitle="Et Nos Produits">
          <PaperVideo />
        </BigTitle>
      </Sections>
      <Footer />
    </React.Fragment>
  );
}
