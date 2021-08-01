import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Sensor from "../Sensor";
import Features from "./Features";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    textAlign: "center",
    paddingBottom: theme.spacing(12),
  },
  header: {
    padding: theme.spacing(2, 0),
  },
  title1: {
    fontWeight: 900,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 54,
    },
  },
  title2: {
    fontWeight: 900,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 34,
    },
  },
  span: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    margin: "auto",
  },
}));

export default function Process() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Sensor>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.header}>
            <Typography
              color={"primary"}
              variant="h1"
              className={classes.title1}
            >
              Notre Process
            </Typography>
            <Typography variant="h2" className={classes.title2}>
              <span className={classes.span}>Optimisation Industrielle</span>
            </Typography>
          </Grid>
          <Grid item md={8} className={classes.subtitle}>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              Nous sommes une société française spécialisée dans le domaine de
              la manufacture de produits électroniques en Inde et en France.
              Notre processus repose sur la conception du produit, son
              industrialisation et son optimisation.
            </Typography>
          </Grid>
        </Grid>
      </Sensor>
      <Features />
    </Box>
  );
}
