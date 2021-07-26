import {
  Paper,
  Box,
  Typography,
  Hidden,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
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
    minHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "40px",
    },
  },
  span: {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    padding: theme.spacing(1, 2),
  },
  video: {
    padding: theme.spacing(2, 0),
  },
  shape: {
    width: 0,
    height: 0,
    borderTopWidth: "45em",
    borderTopColor: "white",
    borderTopStyle: "solid",
    borderRight: "100px solid transparent",
  },
  image: {
    position: "absolute",
    right: 0,
    maxHeight: "45em",
    zIndex: -1,
    objectFit: "contain",
  },
}));

export default function Section1() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} elevation={3} square>
        <Container maxWidth="md">
          <Sensor>
            <ReactPlayer
              className={classes.video}
              url="https://www.youtube.com/watch?v=o8NPllzkFhE"
              width="100%"
            />
          </Sensor>
          <Box>
            <Sensor>
              <Typography className={classes.title} variant="h3">
                La solution pour la fabriquation de vos
                <span className={classes.span}> cartes électroniques</span>
              </Typography>
            </Sensor>
            <Sensor>
              <Typography variant="subtitle1" className={classes.subtitle}>
                K2 Process vous propose une approche sur-mesure de votre projet
                en électronique et informatique industrielle, du stade de la
                conception à l'étude R&D approfondie jusqu’à l’industrialisation
                optimisée.
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
        <img
          className={classes.image}
          style={{
            zIndex: -1,
            height: "45em",
            width: "100%",
            right: 0,
            opacity: 0.5,
            backgroundColor: "black",
          }}
          alt="section1"
        />
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
