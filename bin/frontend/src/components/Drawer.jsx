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
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import GroupIcon from "@material-ui/icons/Group";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const history = useHistory();

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
      <List>
        <ListItem button onClick={() => history.push("/login")}>
          <ListItemIcon>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DoneAllIcon />
          </ListItemIcon>
          <ListItemText primary="S'inscrire" />
        </ListItem>
      </List>
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
