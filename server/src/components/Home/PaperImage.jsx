import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Sensor from "../Sensor";
import green from "../../images/green.jpg";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    zIndex: 10,
    background: `url(${green})`,
    borderRadius: 16,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(4),
    width: "60%",
    maxWidth: "100%",
    zIndex: 5,
    [theme.breakpoints.down("md")]: {
      width: "auto",
      padding: theme.spacing(4, 0),
      backgroundColor: "transparent",
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 900,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      fontSize: 40,
      letterSpacing: "-0.05em",
    },
  },
  span: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    padding: theme.spacing(1, 2, 4, 2),
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
    },
  },
  button: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      borderColor: "#fff",
      "&::after": {
        borderColor: "#fff",
      },
    },
  },
  shape: {
    width: 0,
    height: 0,
    borderTopWidth: "46em",
    borderTopColor: theme.palette.background.paper,
    borderTopStyle: "solid",
    borderRight: "100px solid transparent",
    zIndex: 5,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  fili: {
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 16%)",
    opacity: 0.5,
    height: "100%",
    width: "100%",
    zIndex: 4,
    [theme.breakpoints.down("md")]: {
      opacity: 0.8,
    },
  },
}));

export default function PaperImage() {
  const classes = useStyles();

  return (
    <Sensor>
      <Paper className={classes.root} elevation={5}>
        <Paper className={classes.paper} elevation={0} square>
          <Typography className={classes.title} variant="h1">
            Notre Expertise pour Réaliser{" "}
            <span className={classes.span}>Votre Projet</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            K2 Process vous propose une approche sur-mesure de votre projet en
            électronique et informatique industrielle. Notre objectif est de
            développer les projets pour le compte de nos clients français.
          </Typography>
          <Button startIcon={<TrendingFlatIcon />} className={classes.button}>
            Voir nos Services
          </Button>
        </Paper>
        <Box className={classes.shape}></Box>
        <Box className={classes.fili}></Box>
      </Paper>
    </Sensor>
  );
}
