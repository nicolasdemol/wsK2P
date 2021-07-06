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
    textTransform: "none",
    fontSize: 16,
    lineHeight: 3,
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function SuperTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
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
