import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles((theme) => ({
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 2.6,
    textTransform: "none",
    minWidth: 72,
    transition: "0.25s ease-in-out",
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      color: theme.palette.primary.main,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function SuperTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };

  let history = useHistory();

  return (
    <AntTabs value={value} onChange={handleChange}>
      <AntTab onClick={() => history.push("/")} label="Accueil" />
      <AntTab label="Produits & Services" />
      <AntTab label="Partenaires" />
      <AntTab label="Contact" />
    </AntTabs>
  );
}
