import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import React from "react";
import Logo from "./Logo";
import CallIcon from "@material-ui/icons/Call";
import Copyright from "./Copyright";
import WaveAnimated from "./WaveAnimated";
import Sensor from "./Sensor";

import computer from "../images/computer.png";

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "91vh",
    width: "100%",
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      height: "76vh",
    },
  },
  container: {
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(6),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 2),
    },
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(2, 0),
    fontWeight: 700,
  },
  button: {
    margin: theme.spacing(1, 0, 4, 0),
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    background: `url(${computer})`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    zIndex: -99,
    opacity: 0.1,
  },
  landscape: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(30deg, #ff5000 0%, #f4E090 100%)",
    height: "100%",
    width: "100%",
    zIndex: -100,
  },
}));

export default function Intro() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth={"sm"}>
        <Sensor>
          <Paper className={classes.paper}>
            <Logo />
            <Typography className={classes.title} variant="h4">
              Demander Votre Compte Utilisateur
            </Typography>
            <Button
              onClick={() => history.push("/contact")}
              startIcon={<CallIcon />}
              className={classes.button}
            >
              Nous contacter
            </Button>
            <Copyright />
          </Paper>
        </Sensor>
      </Container>
      <Box className={classes.landscape}></Box>
      <Box className={classes.background}></Box>
      <WaveAnimated position="bottom" />
    </Box>
  );
}
