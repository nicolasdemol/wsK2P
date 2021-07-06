import React, { useEffect } from "react"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    height: 700,
  },
  shape: {
    width: 0,
    height: 0,
    borderTop: "700px solid white",
    borderRight: "100px solid transparent",
  },
  intro: {
    width: 700,
    height: 700,
    backgroundColor: "white",
  },
  section: {
    width: "100%",
    backgroundColor: "white",
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    height: "80%",
  },
  content: {
    padding: theme.spacing(10, 0),
    fontWeight: "bold",
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
    <div style={{ display: "flex" }}>
      <div className={classes.intro}>
        <Container maxWidth="sm">
          <Box className={classes.content}>{ props.children }</Box>
        </Container>
      </div>
      <Hidden smDown>
        <div className={classes.shape}></div>
        <img className={classes.image} src={props.image} width="100%" height="100%" />
      </Hidden>
    </div>
  );
}

export function SimpleSection(props) {
  const classes = useStyles();
  return <section className={classes.section}>{ props.children }</section>;
}

export function BackgroundSection(props) {
  const classes = useStyles();

  const getPosition = (position) => {
    const obj = {}
    for (const key of position.split(" ")) {
      obj[key] = 0
    }
    return obj
  }


  return (
    <Hidden smDown>
      <img style={getPosition(props.position)} className={classes.image_background} src={props.image} alt="image" />
    </Hidden>
  );
}
