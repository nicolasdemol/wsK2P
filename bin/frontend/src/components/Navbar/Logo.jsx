import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../../images/logoK2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    fontFamily: "Syncopate",
    color: theme.palette.primary.main,
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={logo} alt="logo" width="28" height="42" />
      <Typography color="primary" className={classes.title}>
        K2 PROCESS
      </Typography>
    </Box>
  );
}

export default Logo;
