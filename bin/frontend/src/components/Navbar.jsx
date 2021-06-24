import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import Logo from "./Logo";
import CustomizedTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.toolbar}>
          <Logo />
          <CustomizedTabs />
          <ButtonGroup color="primary">
            <Button variant="contained" onClick={() => history.push("/login")}>
              <FingerprintIcon />
              Se connecter
            </Button>
            <Button variant="outlined">
              <DoneAllIcon />
              S'inscrire
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
