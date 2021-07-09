import { Box, Typography, Grid, Paper } from "@material-ui/core";
import { SimpleSection, ShapeSection } from "../components/Sections";
import ReactPlayer from "react-player/youtube";
import green from "../images/green.jpg";
import svg1 from "../images/partenaires/wordpress-logo-0b5b5c7b8b.svg";
import svg2 from "../images/partenaires/jetpack-logo-6e2b150192.svg";
import svg3 from "../images/partenaires/googlecloud-logo-aeef2d9bbd.svg";
import svg4 from "../images/partenaires/litespeed-logo-83adaa186d.svg";
import svg5 from "../images/partenaires/cloudflare-logo-65bd040098.svg";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <ShapeSection image={green}>
        <Typography variant="h4" style={{ marginBottom: 30 }}>
          La solution pour la fabriquation de vos cartes électroniques
        </Typography>
        <ReactPlayer
          style={{ padding: 4, backgroundColor: "#0C0C0C" }}
          width="100"
          url="https://www.youtube.com/watch?v=o8NPllzkFhE"
        />
      </ShapeSection>
      <SimpleSection>
        <LogoPartenaires />
      </SimpleSection>
      <SimpleSection>text</SimpleSection>
      <SimpleSection>text</SimpleSection>
    </React.Fragment>
  );
}

function LogoPartenaires() {
  const logos = [svg1, svg2, svg3, svg4, svg5];
  return (
    <Grid container justify="center">
      {logos.map((element) => {
        return (
          <Grid key={element} item>
            <img src={element} style={{ padding: 10 }} alt="" />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Home;
