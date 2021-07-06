import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    height: 700,
  },
  shape: {
    width: 0,
    height: 0,
    borderTop: "700px solid white",
    borderRight: "100px solid transparent",
  },
  intro: {
    width: 700,
    height: 700,
    backgroundColor: "white",
  },
  section: {
    width: "100%",
    backgroundColor: "white",
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    height: "80%",
  },
  content: {
    padding: theme.spacing(10, 0),
    fontWeight: "bold",
  },
}));

export function ShapeSection({ children, image }) {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <div className={classes.intro}>
        <Container maxWidth="sm">
          <Box className={classes.content}>{children}</Box>
        </Container>
      </div>
      <Hidden smDown>
        <div className={classes.shape}></div>
        <img className={classes.image} src={image} width="100%" height="100%" />
      </Hidden>
    </div>
  );
}

export function SimpleSection({ children }) {
  const classes = useStyles();
  return <section className={classes.section}></section>;
}
