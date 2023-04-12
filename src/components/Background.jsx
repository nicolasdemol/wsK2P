import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
    height: "400px",
  },
}));

export function Background(props) {
  const classes = useStyles();

  const getPosition = (position) => {
    const obj = {};
    for (const key of position.split(" ")) {
      obj[key] = 0;
    }
    return obj;
  };

  return (
    <Hidden smDown>
      <img
        style={getPosition(props.position)}
        className={classes.image}
        src={props.image}
        alt={props.image}
      />
    </Hidden>
  );
}
