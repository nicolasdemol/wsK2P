import {
  Paper,
  Box,
  Typography,
  Hidden,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Sensor from "../Sensor";
import green from "../../images/green.jpg";
import svg1 from "../../images/partenaires/wordpress-logo-0b5b5c7b8b.svg";
import svg2 from "../../images/partenaires/jetpack-logo-6e2b150192.svg";
import svg3 from "../../images/partenaires/googlecloud-logo-aeef2d9bbd.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    width: "60%",
    minheight: "40em",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "80%",
    },
  },
  title: {
    letterSpacing: "-.046em",
    color: theme.palette.primary.main,
    fontWeight: 900,
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: 64,
    },
  },
  span: {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    padding: theme.spacing(1, 2),
  },
  shape: {
    width: 0,
    height: 0,
    borderTopWidth: "40em",
    borderTopColor: theme.palette.background.default,
    borderTopStyle: "solid",
    borderRight: "100px solid transparent",
  },
  image: {
    position: "absolute",
    right: 0,
    maxHeight: "40em",
    zIndex: -2,
    objectFit: "contain",
  },
}));

export default function Section1() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} elevation={3} square>
        <Container maxWidth="md">
          <Box>
            <Sensor>
              <Typography className={classes.title} variant="h1">
                Pour Vous Aider à la Réalisation de
                <span className={classes.span}> Vos Projets</span>
              </Typography>
            </Sensor>
            <Sensor>
              <Typography variant="subtitle1" className={classes.subtitle}>
                K2 Process vous propose une approche sur-mesure de votre projet
                en électronique et informatique industrielle, du stade de la
                conception jusqu’à l’industrialisation optimisée.
              </Typography>
            </Sensor>
          </Box>

          <Sensor>
            <Box>
              <LogoPartenaires />
            </Box>
          </Sensor>
        </Container>
      </Paper>
      <Hidden smDown>
        <div className={classes.shape}></div>
        <img className={classes.image} src={green} alt="section1" />
        <div
          className={classes.image}
          style={{
            backgroundColor: "black",
            zIndex: -1,
            height: "40em",
            width: "100%",
            right: 0,
            opacity: 0.6,
          }}
        ></div>
      </Hidden>
    </Box>
  );
}

function LogoPartenaires() {
  const logos = [svg1, svg2, svg3];
  return (
    <Grid container justify="center">
      {logos.map((element) => {
        return (
          <Grid key={element} item>
            <img
              src={element}
              style={{ paddingTop: 14, paddingBottom: 14 }}
              alt=""
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
