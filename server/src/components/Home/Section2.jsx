import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Sensor from "../Sensor";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10, 2),
    textAlign: "center",
  },
  header: {
    padding: theme.spacing(2, 0),
  },
  title1: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 48,
    },
  },
  title2: {
    fontWeight: theme.typography.fontWeightBold,
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

export default function Section2() {
  const classes = useStyles();

  return (
    <Sensor>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <Typography color={"primary"} variant="h1" className={classes.title1}>
            Notre Process
          </Typography>
          <Typography variant="h2" className={classes.title2}>
            <span className={classes.span}>Optimisation Industrielle</span>
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.subtitle}>
          <Typography variant={"subtitle1"} className={classes.subtitle}>
            Nous sommes une société française spécialisé dans le domaine de la
            manufacture de produits électroniques en Inde et en France. Nous
            avons pour vocation de développer les projets pour le compte de nos
            clients français.
          </Typography>
        </Grid>
      </Grid>
    </Sensor>
  );
}
