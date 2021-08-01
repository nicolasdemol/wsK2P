import { useState } from "react";
import { grey } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";

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
    console.log(darkTheme);
    setTheme(updateTheme);
  };
  return [theme, toggleDarkMode];
};

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "hsl(0, 0%, 20%)",
      light: "hsl(0, 0%, 90%)",
      dark: "hsl(0, 0%, 9%)",
    },
    secondary: {
      main: "#ff5000",
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

    fontFamily: ["Montserrat"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        border: "1px solid hsl(0, 0%, 9%)",
        borderRadius: 4,
        outline: 0,
        transform: "translate(0,-3px)",
        letterSpacing: ".08rem",
        position: "relative",
        "&::before": {},
        "&::after": {
          borderRadius: 4,
          position: "absolute",
          display: "block",
          boxSizing: "border-box",
          content: '""',
          left: "5px",
          top: "5px",
          width: "100%",
          height: "100%",
          borderBottom: "1px solid hsl(0, 0%, 9%)",
          borderRight: "1px solid hsl(0, 0%, 9%)",
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: "hsl(0, 0%, 20%)",
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "hsl(0, 0%, 100%)",
      light: "hsl(0, 0%, 20%)",
      dark: "hsl(0, 0%, 70%)",
    },
    secondary: {
      main: "#ff5000",
    },
    background: {
      default: "hsl(0, 0%, 6%)",
      paper: "hsl(0, 0%, 9%)",
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

    fontFamily: ["Montserrat"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        border: "1px solid #fff",
        borderRadius: 4,
        outline: 0,
        transform: "translate(0,-3px)",
        letterSpacing: ".08rem",
        position: "relative",
        "&::before": {},
        "&::after": {
          borderRadius: 4,
          position: "absolute",
          display: "block",
          boxSizing: "border-box",
          content: '""',
          left: "5px",
          top: "5px",
          width: "100%",
          height: "100%",
          borderBottom: "1px solid #fff",
          borderRight: "1px solid #fff",
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: "#fff",
      },
    },
  },
});
