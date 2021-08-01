import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  makeStyles,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import BigTitle from "../components/BigTitle";
import { useTheme } from "@material-ui/core/styles";
import Sensor from "../components/Sensor";

const useStyles = makeStyles((theme) => ({
  root: {},
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    transition: "0.25s ease-in-out",
    cursor: "pointer",
    border: `4px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
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
          <GridItem title="Application" />
          <GridItem title="Site Internet" />
          <GridItem title="Automatisation" />
        </Grid>
        <Grid container className={classes.gridContainer}>
          <GridItem title="Référencement" />
          <GridItem title="Webdesign" />
        </Grid>
        <Grid container className={classes.gridContainer}>
          <GridItem title="Marketing" />
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
      xs={10}
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
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      {console.log(props.children)}
    </Grid>
  );
}
