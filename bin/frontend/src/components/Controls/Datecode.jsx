import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Box,
  Hidden,
  Card,
  AppBar,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Toolbar,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4, 0),
    padding: theme.spacing(1, 8),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 2),
    },
    border: "1px dashed black",
  },
  logo: {
    marginRight: "auto",
    paddingRight: "10px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  navRight: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(0, 1),
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function Datecode(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Paper className={classes.paper} elevation={0} square>
      <Box className={classes.logo}>
        <DoneOutlineIcon fontSize="small" style={{ paddingRight: 4 }} />
        <Typography variant="h6" className={classes.title}>
          Tracabilité
        </Typography>
      </Box>
      <Box className={classes.navRight}>
        <TextField
          onChange={(event) => handleChange(event)}
          label="Datecode"
          variant={"outlined"}
          size={"small"}
        />
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Télécharger le contrôle</Typography>
              {
                "Après avoir indiqué l'ordre de fabrication du produit, vous pourrez accéder à cette fonctionnalité."
              }
            </React.Fragment>
          }
        >
          <IconButton
            edge={"end"}
            className={classes.button}
            color="primary"
            onClick={props.onDownload}
          >
            <CloudDownloadIcon />
          </IconButton>
        </HtmlTooltip>
      </Box>
    </Paper>
  );
}
