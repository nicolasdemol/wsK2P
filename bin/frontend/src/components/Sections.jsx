import React, { useEffect } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    height: "80%",
    width: "100%",
    opacity: 0.8,
  },
  container: {
    padding: theme.spacing(2, 0),
  },
  shape: {
    width: 0,
    height: 0,
    borderTopWidth: "80vh",
    borderTopColor: "white",
    borderTopStyle: "solid",
    borderRight: "100px solid transparent",
  },
  intro: {
    width: 800,
    padding: theme.spacing(4, 2),
    height: "100%",
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    height: "80vh",
    overflow: "hidden",
  },
  image_background: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
    height: "400px",
  },
}));

export function ShapeSection(props) {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.intro}>
        <Container maxWidth="lg">{props.children}</Container>
      </div>
      <Hidden smDown>
        <Box className={classes.shape}></Box>
        <img className={classes.image} src={props.image} />
      </Hidden>
    </section>
  );
}

export function SimpleSection(props) {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container className={classes.container} maxWidth="lg">
        {props.children}
      </Container>
    </section>
  );
}

export function BackgroundSection(props) {
  const classes = useStyles();

  const getPosition = (position) => {
    const obj = {};
    for (const key of position.split(" ")) {
      obj[key] = 0;
    }
    return obj;
  };

  return (
    <Hidden smDown>
      <img
        style={getPosition(props.position)}
        className={classes.image_background}
        src={props.image}
        alt="image"
      />
    </Hidden>
  );
}
