import { Box, Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {},
  title: { alignContent: "center" },
  subtitle: {},
}));

export default function Section2() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Grid container className={classes.header}>
          <Grid item xs className={classes.title}>
            <Typography variant="h4">
              Notre Process Optimisation Industrielle
            </Typography>
          </Grid>
          <Grid item xs className={classes.subtitle}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
