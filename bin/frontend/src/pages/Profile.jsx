import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import Table from "../components/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { classes } from "istanbul-lib-coverage";
import { BackgroundSection } from "../components/Sections";
import boardProfile from "../images/boardProfile.jpg";
import { Box, Grid, Typography, IconButton } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  paper: {
    margin: theme.spacing(4, "auto"),
    padding: theme.spacing(2),
    height: 100,
    maxWidth: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    width: 700,
  },
  datecode: {
    padding: theme.spacing(1, 0),
    display: "flex",
    alignItems: "center",
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} maxWidth="lg">
      <Grid item>
        <Typography variant="h4">Produits Teledyne</Typography>
        <DatecodeBox />
      </Grid>
      <Grid item className={classes.table}>
        <Table />
      </Grid>
      <BackgroundSection position="left bottom" image={boardProfile} />
    </Grid>
  );
}

function DatecodeBox() {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="button">Rechercher & Télécharger</Typography>
      <Box className={classes.datecode}>
        <TextField type="search" label="Datecode" variant="outlined" />
        <IconButton edge="end" color="primary" style={{ marginLeft: 6 }}>
          <CloudDownloadIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Profile;
