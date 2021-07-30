import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import elephantDark from "../images/elephantDark.svg";
import elephantLight from "../images/elephantLight.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    paddingTop: 4,
    fontFamily: "Syncopate",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  logo: {
    width: 60,
    height: 40,
    [theme.breakpoints.down("sm")]: {
      width: 50,
      height: 30,
    },
  },
}));

function Logo() {
  const theme = useTheme();
  const classes = useStyles();
  const [logo, setLogo] = useState(elephantDark);

  useEffect(() => {
    if (theme.palette.type === "dark") {
      setLogo(elephantDark);
    } else {
      setLogo(elephantLight);
    }
  }, [theme]);
  return (
    <Box className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Typography color="primary" className={classes.title}>
        K2 PROCESS
      </Typography>
    </Box>
  );
}

export default Logo;
