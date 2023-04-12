import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
import { ListItemAvatar, Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import GroupIcon from "@material-ui/icons/Group";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import { useAuth } from "../../hooks/useAuth";
import ExitToApp from "@material-ui/icons/ExitToApp";
import BadgeAvatars from "./BadgeAvatars";
import CloudIcon from "@material-ui/icons/Cloud";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideNav(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const history = useHistory();

  const { user, signout } = useAuth();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
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
              <ListItemText primary={"TELEDYNE"} />
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
        <ListItem button onClick={() => history.push("/contact")}>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      {user ? (
        <List>
          <ListItem button onClick={() => history.push("/controls")}>
            <ListItemIcon>
              <DoneOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Tracabilité" />
          </ListItem>
          <ListItem button onClick={() => history.push("/data")}>
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
    </Box>
  );

  return (
    <div>
      <IconButton
        color="default"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
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
