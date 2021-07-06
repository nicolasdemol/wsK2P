import Container from "@material-ui/core/Container";
import Table from "../components/Table";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  paper: {
    marginBottom: 20,
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.paper} elevation={2}>
        <Table />
      </Paper>
    </Container>
  );
}

export default Profile;
