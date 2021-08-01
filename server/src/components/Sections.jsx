import { Box, Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
  },
}));

export default function Sections(props) {
  const classes = useStyles();
  const elements = [];
  const theme = useTheme();

  props.children.forEach((element) =>
    elements.push(
      <Box
        className={classes.root}
        style={{
          marginBottom: `${props.margin}`,
        }}
      >
        {element}
      </Box>
    )
  );

  return <Container maxWidth={props.maxWidth}>{elements}</Container>;
}
