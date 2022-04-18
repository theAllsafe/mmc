import React from "react";
import fillshare from "../res/fillshare.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  lcsicons1: {
    [theme.breakpoints.between(320, 426)]: {
      width: "12px",
      height: "auto",
    },
    [theme.breakpoints.between(425, 600)]: {
      width: "12px",
      height: "auto",
    },
  },
}));

const Share = () => {
  const classes = useStyles();
  return (
    <>
      <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
        <img src={fillshare} alt="fillshare" className={classes.lcsicons1} />
      </div>
    </>
  );
};

export default Share;
