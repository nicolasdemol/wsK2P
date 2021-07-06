import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItemSecondaryAction } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Typography, ListItemAvatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import GroupIcon from "@material-ui/icons/Group";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Hidden from "@material-ui/core/Hidden";
import { useAuth } from "../hooks/useAuth";
import ExitToApp from "@material-ui/icons/ExitToApp";
import BadgeAvatars from "./BadgeAvatars";
import CloudIcon from "@material-ui/icons/Cloud";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const history = useHistory();

  const { user, signout } = useAuth();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user ? (
          <React.Fragment>
            <ListItem
              alignItems="flex-start"
              onClick={() => history.push("/profile")}
            >
              <ListItemAvatar>
                <BadgeAvatars />
              </ListItemAvatar>
              <ListItemText primary="Teledyne Oldham Simtronics" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <NavigateNextIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="outset" component="li" />
          </React.Fragment>
        ) : (
          ""
        )}
        <ListItem button onClick={() => history.push("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Produits & Services" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Partenaires" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      {user ? (
        <List>
          <ListItem button onClick={() => signout()}>
            <ListItemIcon>
              <CloudIcon />
            </ListItemIcon>
            <ListItemText primary="Vos données" />
          </ListItem>
          <ListItem button onClick={() => signout()}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Se déconnecter" />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem button onClick={() => history.push("/login")}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Se connecter" />
          </ListItem>
        </List>
      )}
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
