import React from "react";
import { CssBaseline, Button } from "@material-ui/core";

import green from "../images/green.jpg";

import WidgetsIcon from "@material-ui/icons/Widgets";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import CodeIcon from "@material-ui/icons/Code";

import Intro from "../components/Intro";
import Sections from "../components/Sections";
import PaperImage from "../components/PaperImage";
import WithTitle from "../components/WithTitle";
import PaperVideo from "../components/PaperVideo";
import Footer from "../components/Footer";
import ThreeFeatures from "../components/ThreeFeatures";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Intro />
      <Sections maxWidth={"xl"} margin={"14em"}>
        <WithTitle
          title="Notre Process"
          subtitle="Optimisation Industrielle"
          text="Nous sommes une société française spécialisée dans le domaine de la
          manufacture de produits électroniques en Inde et en France. Notre
          processus repose sur la conception du produit, son industrialisation
          et son optimisation."
        >
          <ThreeFeatures
            icon1={<DeveloperBoardIcon fontSize="large" />}
            title1="Réalisation de prototypes"
            text1="Nous prenons grand soin d'aider nos clients à l'élaboration de leur
        cahier des charges et à l'étude de celui-ci, il suffit de nous
        contacter."
            icon2={<WidgetsIcon fontSize="large" />}
            title2="Assemblage de cartes"
            text2="Nous disposons d'un atelier de fabrication et de notre propre ligne
        d'assemblage automatisée pour la réalisation de cartes électroniques."
            icon3={<CodeIcon fontSize="large" />}
            title3="Programmation Software"
            text3="Nous mettons à disposition nos ingénieurs qualifiés seront répondre à
        toutes vos contraintes à la réalisation de votre projet."
          />
        </WithTitle>
        <PaperImage
          title="Notre Expertise pour Réaliser Votre Projet"
          subtitle="K2 Process vous propose une approche sur-mesure de votre projet en
            électronique et informatique industrielle. Notre objectif est de
            développer les projets pour le compte de nos clients français."
          backgroundImage={green}
          button="Voir nos services"
        ></PaperImage>

        <WithTitle title="Nos Services" subtitle="Et Nos Produits">
          <PaperVideo url="https://www.youtube.com/watch?v=2b2gJu-g3qE" />
        </WithTitle>
      </Sections>
      <Footer />
    </React.Fragment>
  );
}
