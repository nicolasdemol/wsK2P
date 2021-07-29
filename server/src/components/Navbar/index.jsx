import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Hidden,
  Button,
  Switch,
  withStyles,
} from "@material-ui/core/";

import LockIcon from "@material-ui/icons/Lock";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import SideNav from "./SideNav";
import BadgeAvatars from "./BadgeAvatars";
import SuperTabs from "./SuperTabs";
import Logo from "./Logo";

import { useAuth } from "../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    borderBottom: ` 1px solid ${theme.palette.primary.light}`,
  },
  toolbar: {
    margin: theme.spacing(0, 10),
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  logo: {
    marginRight: "auto",
  },
  tabs: {
    position: "absolute",
    height: "100%",
  },
  badge: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    switch: {},
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  let history = useHistory();

  const [isTop, setTop] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => {
      const Top = window.scrollY > 10;
      if (isTop !== Top) {
        setTop(!isTop);
      }
    };
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, false);
  });

  return (
    <React.Fragment>
      <AppBar
        className={classes.root}
        position="sticky"
        elevation={isTop ? 5 : 0}
      >
        <Toolbar className={classes.toolbar}>
          <Box className={classes.logo} onClick={() => history.push("/")}>
            <Logo />
          </Box>
          <Hidden smDown>
            <Box className={classes.tabs}>
              <SuperTabs />
            </Box>
            {user ? (
              <Box className={classes.badge}>
                <Typography variant="body2">Teledyne Inc.</Typography>
                <BadgeAvatars />
              </Box>
            ) : (
              <Box>
                <Button
                  variant="outlined"
                  onClick={() => {
                    history.push("/login");
                  }}
                  startIcon={<LockIcon />}
                >
                  Se connecter
                </Button>
              </Box>
            )}
            <DarkModeSwitch onClick={props.toggleDarkMode} />
          </Hidden>
          <Hidden mdUp>
            <SideNav />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export const DarkModeSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 40,
    padding: "12px 0px 8px 0",
    margin: theme.spacing(0, 0, 0, 4),
    overflow: "visible",
  },
  switchBase: {
    width: 24,
    padding: 1,
    "&$checked": {
      transform: "translateX(26px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: `${theme.palette.primary.main}`,
        opacity: 1,
        border: "none",
      },
    },
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "#fff",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      icon={
        <NightsStayIcon
          size="small"
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#43d",
            color: "#ff8",
            borderRadius: 40,
            padding: 10,
          }}
        />
      }
      checkedIcon={
        <Brightness4Icon
          style={{
            width: 40,
            height: 40,
            color: "hsl(0, 0%, 20%)",
            backgroundColor: "#fff",
            borderRadius: 40,
            padding: 10,
            boxShadow: "0 9px 30px -6px #aaa",
          }}
        />
      }
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});