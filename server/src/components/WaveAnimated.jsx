import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "15vh",
    minHeight: "150px",
    maxHeight: "250px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      minHeight: "40px",
    },
  },
  parallax: {
    "& > *": {
      animation: "$moveForever 25s cubic-bezier(.55,.5,.45,.5) infinite",
    },
    "& > use:nth-child(1)": {
      animationDelay: "-2s",
      animationDuration: "7s",
    },
    "& > use:nth-child(2)": {
      animationDelay: "-3s",
      animationDuration: "10s",
    },
    "& > use:nth-child(3)": {
      animationDelay: "-4s",
      animationDuration: "13s",
    },
    "& > use:nth-child(4)": {
      animationDelay: "-5s",
      animationDuration: "20s",
    },
  },
  "@keyframes moveForever": {
    "0%": {
      transform: "translate3d(-90px,0,0)",
    },
    "100%": {
      transform: "translate3d(85px,0,0)",
    },
  },
}));

export default function WaveAnimated(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [rotate, setRotate] = useState(0);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const handlePosition = () => {
      if (props.position === "top") {
        setRotate(180);
        setTop(0);
        setBottom(false);
      }
    };
    handlePosition();
  });

  return (
    <div>
      <svg
        className={classes.root}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
        style={{
          top: `${top}`,
          bottom: `${bottom}`,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={theme.palette.background.default}
            opacity="0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={theme.palette.background.default}
            opacity="0.5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={theme.palette.background.default}
            opacity="0.3"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={theme.palette.background.default}
          />
        </g>
      </svg>
    </div>
  );
}
