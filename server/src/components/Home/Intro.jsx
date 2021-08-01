import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";

import React from "react";
import Logo from "../Logo";
import CallIcon from "@material-ui/icons/Call";
import Copyright from "../Copyright";
import Sensor from "../Sensor";

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
    borderRadius: 16,
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
  landscape: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "linear-gradient(30deg, #ff5000 0%, #f4E090 100%)",
    height: "100%",
    width: "100%",
    zIndex: -100,
  },
  waves: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "15vh",
    minHeight: "150px",
    maxHeight: "250px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      minHeight: "40px",
    },
  },
  parallax: {
    "& > *": {
      animation: "$moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite",
    },
    "& > use:nth-child(1)": {
      animationDelay: "-2s",
      animationDuration: "7s",
    },
    "& > use:nth-child(2)": {
      animationDelay: "-3s",
      animationDuration: "10s",
    },
    "& > use:nth-child(3)": {
      animationDelay: "-4s",
      animationDuration: "13s",
    },
    "& > use:nth-child(4)": {
      animationDelay: "-5s",
      animationDuration: "20s",
    },
  },
  "@keyframes moveForever": {
    "0%": {
      transform: "translate3d(-90px,0,0)",
    },
    "100%": {
      transform: "translate3d(85px,0,0)",
    },
  },
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <WaveAnimated position="top" />
      <Container className={classes.container} maxWidth={"sm"}>
        <Sensor>
          <Paper className={classes.paper}>
            <Logo />
            <Typography className={classes.title} variant="h4">
              Demander Votre Compte Utilisateur
            </Typography>
            <Button startIcon={<CallIcon />} className={classes.button}>
              Nous contacter
            </Button>
            <Copyright />
          </Paper>
        </Sensor>
      </Container>
      <Box className={classes.landscape}></Box>
      <WaveAnimated position="bottom" />
    </Box>
  );
}

function WaveAnimated(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [rotate, setRotate] = useState(0);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const handlePosition = () => {
      if (props.position === "top") {
        setRotate(180);
        setTop(0);
        setBottom(false);
      }
    };
    handlePosition();
  });

  return (
    <div>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
        style={{
          top: `${top}`,
          bottom: `${bottom}`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={theme.palette.background.default}
            opacity="0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={theme.palette.background.default}
            opacity="0.5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={theme.palette.background.default}
            opacity="0.3"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={theme.palette.background.default}
          />
        </g>
      </svg>
    </div>
  );
}
