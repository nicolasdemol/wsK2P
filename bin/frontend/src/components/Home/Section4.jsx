import ReactPlayer from "react-player";
import { Card, Grid, makeStyles } from "@material-ui/core";
import Sensor from "../Sensor";

const useStyles = makeStyles((theme) => ({
  video: {
    borderRadius: 16,
    height: "100vh",
    margin: theme.spacing(8, 20),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
}));

export default function Section4() {
  const classes = useStyles();
  return (
    <Sensor>
      <Grid container>
        <Grid item xs={12}>
          <Card raised className={classes.video}>
            <ReactPlayer
              muted
              playing
              controls={false}
              url="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
              width="100%"
              height="100%"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card raised></Card>
        </Grid>
        <Grid item xs={6}>
          <Card raised></Card>
        </Grid>
      </Grid>
    </Sensor>
  );
}
