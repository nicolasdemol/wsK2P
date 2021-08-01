import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(8),
  },
}));

export default function Sections(props) {
  const classes = useStyles();
  const elements = [];

  props.children.forEach((element) =>
    elements.push(
      <Box
        className={classes.root}
        style={{
          paddingBottom: `${props.margin}`,
        }}
      >
        {element}
      </Box>
    )
  );

  return <Container maxWidth={props.maxWidth}>{elements}</Container>;
}
