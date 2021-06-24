import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#0c0C0C",
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {},
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
      <AntTab label="Accueil" />
      <AntTab label="Produits & Services" />
      <AntTab label="Partenaires" />
      <AntTab label="Contact" />
    </AntTabs>
  );
}
