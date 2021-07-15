import { Container, Paper, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: { margin: "auto" },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function Datecode() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>
          Rechercher & Télécharger
        </Typography>
        <SearchBar />
      </Paper>
    </Container>
  );
}

function SearchBar() {
  const classes = useStyles;
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={`Datecode`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "recherche" }}
      />
    </div>
  );
}
