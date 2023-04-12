import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Box,
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
import Logo from "../Logo";

import { useAuth } from "../../hooks/useAuth";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
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
    switch: {
      margin: theme.spacing(0, 8),
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  let history = useHistory();

  const [isTop, setTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const Top = window.scrollY > 10;
      if (isTop !== Top) {
        setTop(!isTop);
      }
    };
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, false);
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
          <Hidden lgUp>
            <DarkModeSwitch onClick={props.toggleDarkMode} />
            <SideNav />
          </Hidden>
          <Hidden mdDown>
            <DefaultNav toggleDarkMode={props.toggleDarkMode} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const DefaultNav = (props) => {
  const { user } = useAuth();
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <DarkModeSwitch onClick={props.toggleDarkMode} />
      <Box className={classes.tabs}>
        <SuperTabs />
      </Box>
      {user ? (
        <Box className={classes.badge}>
          <BadgeAvatars />
        </Box>
      ) : (
        <Box>
          <Button
            onClick={() => {
              history.push("/login");
            }}
            startIcon={<LockIcon />}
          >
            Se connecter
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
};

const DarkModeSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 40,
    margin: theme.spacing(0, 8),
    padding: "8px 0px 8px 0",
    overflow: "visible",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  switchBase: {
    width: 24,
    height: 40,
    "&$checked": {
      transform: "translateX(26px)",
      "& + $track": {
        opacity: 1,
        border: "none",
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  track: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 26 / 2,
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
            backgroundColor: "#44f",
            color: "#ff3",
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
            backgroundColor: "hsl(0, 0%, 20%)",
            color: "#fff",
            borderRadius: 40,
            padding: 10,
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
