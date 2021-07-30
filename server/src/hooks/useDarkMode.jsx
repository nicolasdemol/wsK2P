import { useState } from "react";
import { grey } from "@material-ui/core/colors";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleDarkMode = () => {
    const updateTheme = () => {
      if (theme === darkTheme) {
        return lightTheme;
      } else {
        return darkTheme;
      }
    };
    setTheme(updateTheme);
  };
  return [theme, toggleDarkMode];
};

const lightTheme = {
  palette: {
    type: "light",
    primary: {
      main: "hsl(0, 0%, 20%)",
      light: "hsl(0, 0%, 90%)",
      dark: "hsl(0, 0%, 10%)",
    },
    secondary: {
      main: "#f14",
    },
  },
  typography: {
    fontWeightBold: 700,
    fontSize: 15,
    h2: {
      fontSize: "60px",
    },

    subtitle1: {
      color: grey[600],
    },

    fontFamily: ["Lato"].join(","),
  },
};

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "hsl(0, 0%, 100%)",
      light: "hsl(0, 0%, 20%)",
      dark: "hsl(0, 0%, 70%)",
    },
    secondary: {
      main: "#f14",
    },
    background: {
      default: "hsl(0, 0%, 10%)",
      paper: "hsl(0, 0%, 14%)",
    },
  },
  typography: {
    fontWeightBold: 700,
    fontSize: 15,
    h2: {
      fontSize: "60px",
    },

    subtitle1: {
      color: grey[400],
    },

    fontFamily: ["Lato"].join(","),
  },
};
