import { useState } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Sensor from "./Sensor";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
  },
  title: {
    fontWeight: 900,
    padding: theme.spacing(2, 0),
  },
  titleHover: {
    fontWeight: 900,
    padding: theme.spacing(2, 0),
    color: theme.palette.secondary.main,
  },
  icon: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    width: theme.spacing(10),
    height: theme.spacing(10),
    boxShadow: `0 9px 30px -6px ${theme.palette.secondary.main}`,
  },
  iconHover: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    transform: "translateY(-10%)",
    width: theme.spacing(10),
    height: theme.spacing(10),
    boxShadow: `0 14px 40px -6px ${theme.palette.secondary.main}`,
  },
  gridItem: {
    padding: theme.spacing(2),
    "& > *": {
      transition: ".25s ease-in-out",
    },
  },
}));

export default function ThreeFeatures(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <GridItem
        icon={props.icon1}
        title={props.title1}
      >
        {props.text1}
        
      </GridItem>
      <GridItem
        icon={props.icon2}
        title={props.title2}
      >
      {props.text2}
        
      </GridItem>
      <GridItem
        icon={props.icon3}
        title={props.title3}
      >
        {props.text3}
        
      </GridItem>
    </Grid>
  );
}

function GridItem(props) {
  const classes = useStyles();

  const [active, setActive] = useState(false);

  const hoverEl = (state) => {
    setActive(state);
  };

  return (
    <Sensor>
      <Grid item sm={12} md={4} lg={3} className={classes.gridItem}>
        <Avatar
          onMouseEnter={() => hoverEl(true)}
          onMouseLeave={() => hoverEl(false)}
          variant="circle"
          className={active ? classes.iconHover : classes.icon}
        >
          {props.icon}
        </Avatar>
        <Typography
          variant="h5"
          className={active ? classes.titleHover : classes.title}
        >
          {props.title}
        </Typography>
        <Typography variant="subtitle1">{props.children}</Typography>
      </Grid>
    </Sensor>
  );
}
