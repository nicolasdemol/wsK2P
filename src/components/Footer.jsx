import { Box, Grid, Typography, Link, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./Copyright";
import Logo from "./Logo";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(8, 0, 12, 0),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 6, 8, 6),
    },
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    "& > *": {
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 900,
  },
  bottom: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 0),
    "& > *": {
      padding: theme.spacing(2, 8),
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <Paper elevation={5} className={classes.root} square>
        <Grid container className={classes.gridContainer}>
          <GridItem title="À PROPOS">
            <Link variant="h6">Notre Process</Link>
            <Link variant="h6">Notre Process</Link>
            <Link variant="h6">Notre Process</Link>
          </GridItem>
          <GridItem title="NOUS CONTACTER">
            <Link variant="h6">Devenir membre</Link>
            <Link variant="h6">Devenir membre</Link>
            <Link variant="h6">Devenir membre</Link>
          </GridItem>
          <GridItem title="RÉSEAUX SOCIAUX">
            <Link variant="h6">Instagram</Link>
            <Link variant="h6">Facebook</Link>
            <Link variant="h6">Youtube</Link>
            <Link variant="h6">LinkedIn</Link>
          </GridItem>
        </Grid>
      </Paper>
      <Paper elevation={5} square>
        <Grid container className={classes.bottom}>
          <Grid item xs={12} sm={4}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Copyright />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

function GridItem(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} md={3} lg={3} className={classes.gridItem}>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      {props.children}
    </Grid>
  );
}

function SocialMedia() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={2}>
        <FacebookIcon fontSize="large" />
      </Grid>
      <Grid item xs={2}>
        <InstagramIcon fontSize="large" />
      </Grid>
      <Grid item xs={2}>
        <YouTubeIcon fontSize="large" />
      </Grid>
      <Grid item xs={2}>
        <LinkedInIcon fontSize="large" />
      </Grid>
    </Grid>
  );
}
