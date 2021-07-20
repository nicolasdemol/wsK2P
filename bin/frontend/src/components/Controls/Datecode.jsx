import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { makeStyles } from "@material-ui/core/styles";
import test from "../../images/green.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    flexShrink: 0,
    [theme.breakpoints.down("sm")]: {
      marginTop: 2,
      marginBottom: theme.spacing(2),
    },
  },
  paper: {
    position: "fixed",
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      position: "static",
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  card: {
    maxWidth: 345,
    marginTop: theme.spacing(3),
  },
  media: {
    height: 140,
  },
}));

export default function Datecode(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <DoneOutlineIcon fontSize="small" style={{ paddingRight: 4 }} />
          <Typography variant="h6" className={classes.title}>
            Traçabilité du produit
          </Typography>
        </Box>
        <Box>
          <TextField
            onChange={(event) => handleChange(event)}
            label="Datecode"
          />
        </Box>
        <Box>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={test}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                ></Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Veuillez indiquer l'ordre de fabrication du produit, afin que
                  nous puissions procéder à l'analyse.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={props.onDownload}>
                Télécharger
              </Button>
              <Button size="small" color="primary">
                En savoir plus
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Paper>
    </Container>
  );
}
