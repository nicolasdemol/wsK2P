import ReactPlayer from "react-player";
import { Card, CardMedia, Grid, makeStyles, Paper } from "@material-ui/core";
import Sensor from "../Sensor";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    marginBottom: theme.spacing(8),
    borderRadius: 16,
    overflow: "hidden",
  },
}));

export default function Section4() {
  const classes = useStyles();
  return (
    <Sensor>
      <Paper className={classes.paper}>
        <ReactPlayer
          muted
          playing
          width="100%"
          height="44vh"
          controls={false}
          url="https://www.youtube.com/watch?v=2b2gJu-g3qE"
        />
      </Paper>
    </Sensor>
  );
}
