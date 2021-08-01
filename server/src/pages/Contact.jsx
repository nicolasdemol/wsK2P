import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import BigTitle from "../components/BigTitle";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    transition: "0.25s ease-in-out",
    cursor: "pointer",
    border: `2px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    "& > *": {
      fontWeight: 700,
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1),
    },
  },
  textfield: {
    margin: theme.spacing(4),
    "& > *": {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2, 1),
    },
  },
  button: {
    margin: theme.spacing(6, 2, 16, 2),
    padding: theme.spacing(1, 0),
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <BigTitle title="Nous Contacter" subtitle="Que voulez-vous faire ?" />
      <Container maxWidth={"md"}>
        <Grid container className={classes.gridContainer}>
          <GridItem title="Prototypes" />
          <GridItem title="Software" />
          <GridItem title="Automatisation" />
        </Grid>
        <Grid container className={classes.gridContainer}>
          <GridItem title="Achats" />
          <GridItem title="Partenariat" />
        </Grid>
        <Grid container className={classes.gridContainer}>
          <GridItem title="Autres" />
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={6} sm={5} className={classes.gridContainer}>
            <TextField
              className={classes.textfield}
              label="Nom"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={6} sm={5} className={classes.gridContainer}>
            <TextField
              className={classes.textfield}
              label="Email"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridContainer}>
            <Button fullWidth className={classes.button}>
              Envoyer la requête
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function GridItem(props) {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Grid
      xs={12}
      sm={4}
      md={3}
      onClick={handleClick}
      item
      className={classes.gridItem}
      style={
        active
          ? {
              backgroundColor: theme.palette.secondary.main,
            }
          : null
      }
    >
      {active ? (
        <DoneOutlineIcon
          style={{ marginRight: theme.spacing(1) }}
          fontSize="small"
        />
      ) : null}
      <Typography variant="button" className={classes.title}>
        {props.title}
      </Typography>
      {console.log(props.children)}
    </Grid>
  );
}
