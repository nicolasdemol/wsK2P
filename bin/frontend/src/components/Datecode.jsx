import { useRef } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  IconButton,
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function Datecode() {
  const classes = useStyles();
  const textRef = useRef();

  const handleDownload = () => {
    console.log(textRef.current.value);
    axios({ url: `http://localhost:8000/controls/${textRef.current.value}` });
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper}>
        <Box>
          <Typography variant="h6" className={classes.title}>
            Rechercher & Télécharger
          </Typography>
        </Box>
        <Box>
          <TextField inputRef={textRef} label="Datecode" />
          <IconButton edge="end" onClick={() => handleDownload()}>
            <CloudDownloadIcon />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}
