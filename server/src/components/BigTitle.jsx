import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Sensor from "./Sensor";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  gridContainer: {
    textAlign: "center",
    padding: theme.spacing(4, 0),
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

export default function BigTitle(props) {
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
              {props.title}
            </Typography>
            <Typography variant="h2" className={classes.title2}>
              <span className={classes.span}>{props.subtitle}</span>
            </Typography>
          </Grid>
          <Grid item md={8} className={classes.subtitle}>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              {props.text}
            </Typography>
          </Grid>
        </Grid>
      </Sensor>
      {props.children}
    </Box>
  );
}
