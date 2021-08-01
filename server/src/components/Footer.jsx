import { Box, Grid, Typography, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(8, 0, 16, 0),
    backgroundColor: theme.palette.background.default,
    textAlign: "center",
    borderTop: `1px dashed ${theme.palette.secondary.main}`,
    borderBottom: `1px dashed ${theme.palette.secondary.main}`,
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
      <Box className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <GridItem title="À PROPOS">
            <Link variant="h6">Notre Process</Link>
            <Link variant="h6">Notre Process</Link>
            <Link variant="h6">Notre Process</Link>
          </GridItem>
          <GridItem title="NOUS CONTACTER">
            <Link variant="h6">Devenir membre</Link>
          </GridItem>
          <GridItem title="RÉSEAUX SOCIAUX">
            <Link variant="h6">Instagram</Link>
            <Link variant="h6">Facebook</Link>
            <Link variant="h6">Youtube</Link>
            <Link variant="h6">LinkedIn</Link>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid container className={classes.bottom}>
          <Grid item xs={12} sm={6}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button startIcon={<CallIcon />} className={classes.button}>
              Nous contacter
            </Button>
          </Grid>
        </Grid>
      </Box>
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
