import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "Faster One",
    lineHeight: 1,
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
    lineHeight: 1,
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <Box className={classes.logo}>
      <img src={logo} alt="logo" width="44" height="72" />
      <div>
        <Typography color="primary" className={classes.title}>
          K2 Process
        </Typography>
        <Typography className={classes.subtitle}>
          Optimisation Industrielle
        </Typography>
      </div>
    </Box>
  );
}

export default Logo;
