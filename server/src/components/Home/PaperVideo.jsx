import ReactPlayer from "react-player";
import { makeStyles, Paper } from "@material-ui/core";
import Sensor from "../Sensor";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    width: "100%",
  },
}));

export default function PaperVideo() {
  const classes = useStyles();
  return (
    <Sensor>
      <Paper className={classes.paper}>
        <ReactPlayer
          muted
          playing
          width="100%"
          height="44em"
          controls={false}
          url="https://www.youtube.com/watch?v=2b2gJu-g3qE"
        />
      </Paper>
    </Sensor>
  );
}
