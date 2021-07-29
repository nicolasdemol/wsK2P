import { Typography, Container, Grid } from "@material-ui/core";
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
  title: {
    alignContent: "center",
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
  span: {
    color: theme.palette.secondary.main,
  },
  subtitle: {
    padding: theme.spacing(1, 2),
  },
}));

export default function Section2() {
  const classes = useStyles();

  return (
    <Sensor>
      <Container maxWidth="md" className={classes.root}>
        <Grid container>
          <Grid item xs={12} className={classes.header}>
            <Typography
              color={"primary"}
              variant="h1"
              className={classes.title}
            >
              Notre Process
            </Typography>
            <Typography variant="h2" className={classes.title}>
              <span className={classes.span}>Optimisation Industrielle</span>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.subtitle}>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              Nous sommes une société française spécialisé dans le domaine de la
              manufacture de produits électroniques en Inde et en France. Nous
              avons pour vocation de développer les projets pour le compte de
              nos clients français.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Sensor>
  );
}
