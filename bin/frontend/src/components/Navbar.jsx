import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Hidden from "@material-ui/core/Hidden";
import TemporaryDrawer from "./Drawer";

import Logo from "./Logo";
import CustomizedTabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #EEEEEE",
  },
  logo: {
    flexGrow: 1,
  },
  tabs: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div>
      <AppBar
        className={classes.root}
        position="sticky"
        color="inherit"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <div
            className={classes.logo}
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            <Logo />
          </div>
          <Hidden smDown>
            <div className={classes.tabs}>
              <CustomizedTabs />
            </div>
            <div>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={() => history.push("/login")}
              >
                <LockIcon />
                Se connecter
              </Button>
              <Button
                className={classes.button}
                disableElevation
                color="primary"
                variant="contained"
              >
                <DoneAllIcon />
                S'inscrire
              </Button>
            </div>
          </Hidden>
          <TemporaryDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}
