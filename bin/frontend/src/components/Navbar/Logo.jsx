import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Syncopate",
    lineHeight: 1,
    color: theme.palette.secondary.main,
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
      <img src={logo} alt="logo" width="38" height="64" />
      <div>
        <Typography color="primary" className={classes.title}>
          K2 PROCESS
        </Typography>
        <Typography className={classes.subtitle}>
          Optimisation Industrielle
        </Typography>
      </div>
    </Box>
  );
}

export default Logo;
