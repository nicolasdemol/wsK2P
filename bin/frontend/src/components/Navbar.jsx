import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Hidden from "@material-ui/core/Hidden";
import SideNav from "./SideNav";
import BadgeAvatars from "./BadgeAvatars";

import { useAuth } from "../hooks/useAuth";

import Logo from "./Logo";
import SuperTabs from "./SuperTabs";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbar: {
    justifyContent: "center",
  },
  logo: {
    marginRight: "auto"
  },
  tabs: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  let history = useHistory();

  const removeIndicator = () => {};

  const { user, signout } = useAuth();

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
          <Hidden mdDown>
            <div className={classes.tabs}>
              <SuperTabs />
            </div>
            {user ? (
              <BadgeAvatars />
            ) : (
              <div>
                <Button
                  className={classes.button}
                  variant="outlined"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  <LockIcon style={{ paddingRight: 2 }} />
                  Se connecter
                </Button>
              </div>
            )}
          </Hidden>
          <Hidden lgUp>
            <SideNav />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
