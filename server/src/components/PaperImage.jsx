import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Sensor from "./Sensor";

import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    zIndex: 10,
    overflow: "hidden",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(6, 20, 6, 6),
    width: "70%",
    maxWidth: "100%",
    zIndex: 5,
    clipPath: "polygon(0 0, 100% 0, 90% 101%, 0 101%)",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      clipPath: "none",
      width: "auto",
      padding: theme.spacing(4, 0),
      backgroundColor: "transparent",
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 800,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      color: "#fff",
      fontSize: 48,
      letterSpacing: "-0.05em",
    },
  },
  subtitle: {
    padding: theme.spacing(1, 2, 4, 2),
    fontWeight: 600,
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
  fili: {
    position: "absolute",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.7,
    height: "100%",
    width: "100%",
    zIndex: 4,
  },
}));

export default function PaperImage(props) {
  const classes = useStyles();

  return (
    <Sensor>
      <Paper
        className={classes.root}
        style={{ background: `url(${props.backgroundImage})` }}
        elevation={5}
      >
        <Paper className={classes.paper} elevation={0} square>
          <Typography className={classes.title} variant="h1">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {props.subtitle}
          </Typography>
          <Button startIcon={<TrendingFlatIcon />} className={classes.button}>
            Voir nos Services
          </Button>
          <Box className={classes.shape}></Box>
        </Paper>
        <Box className={classes.fili}></Box>
      </Paper>
    </Sensor>
  );
}
