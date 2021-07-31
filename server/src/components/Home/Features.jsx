import { useState } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import WidgetsIcon from "@material-ui/icons/Widgets";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import CodeIcon from "@material-ui/icons/Code";
import Sensor from "../Sensor";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    padding: theme.spacing(2, 0),
  },
  titleHover: {
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

export default function Features() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <GridItem
        icon={<DeveloperBoardIcon fontSize="large" />}
        title="Réalisation prototypes"
      >
        Nous prenons grand soin d'aider nos clients à l'élaboration de leur
        cahier des charges et à l'étude de celui-ci, il suffit de nous
        contacter.
      </GridItem>
      <GridItem
        icon={<WidgetsIcon fontSize="large" />}
        title="Assemblage de cartes"
      >
        Nous disposons d'un atelier de fabrication et de notre propre ligne
        d'assemblage automatisée pour la réalisation de cartes électroniques.
      </GridItem>
      <GridItem
        icon={<CodeIcon fontSize="large" />}
        title="Programmation Software"
      >
        Nous mettons à disposition nos ingénieurs qualifiés seront répondre à
        toutes vos contraintes à la réalisation de votre projet.
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
          variant="h6"
          className={active ? classes.titleHover : classes.title}
        >
          {props.title}
        </Typography>
        <Typography variant="subtitle1">{props.children}</Typography>
      </Grid>
    </Sensor>
  );
}
