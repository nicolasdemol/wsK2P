import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Box,
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
    padding: theme.spacing(1, 12),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 2),
    },
    borderTop: `1px dashed ${theme.palette.secondary.main}`,
    borderBottom: `1px dashed ${theme.palette.secondary.main}`,
  },
  navLeft: {
    marginLeft: 14,
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  text: {
    margin: theme.spacing(0, 4),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0, 1),
    },
  },
  navRight: {
    display: "flex",
    alignItems: "center",
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
    <Paper className={classes.paper} elevation={5} square>
      <Box className={classes.navLeft}>
        <DoneOutlineIcon fontSize="small" style={{ marginRight: 8 }} />
        <Typography variant="h6" className={classes.title}>
          Tracabilité
        </Typography>
        <TextField
          className={classes.text}
          onChange={(event) => handleChange(event)}
          label="Datecode*"
          variant={"outlined"}
          size={"small"}
        />
      </Box>
      <Box className={classes.navRight}>
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
          <IconButton color="primary" onClick={props.onDownload}>
            <CloudDownloadIcon />
          </IconButton>
        </HtmlTooltip>
      </Box>
    </Paper>
  );
}
