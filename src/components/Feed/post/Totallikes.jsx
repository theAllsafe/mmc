import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import more1 from "../res/more1.svg";
import more2 from "../res/more2.svg";
import more3 from "../res/more3.svg";
import more4 from "../res/more4.svg";
import fillshare from "../res/fillshare.svg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  lcsicons: {
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.between(425, 768)]: {
      fontSize: "12px !important",
    },
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
  moreimg: {
    [theme.breakpoints.between(320, 376)]: {
      width: "25%",
    },
    [theme.breakpoints.between(375, 426)]: {
      width: "20%",
    },
    [theme.breakpoints.between(426, 600)]: {
      width: "18%",
    },
    [theme.breakpoints.between(600, 768)]: {
      width: "22%",
    },
  },
  more1: {
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more2: {
    position: "relative",
    right: "15%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more3: {
    position: "relative",
    right: "30%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more4: {
    position: "relative",
    right: "46%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  liked: {
    fontSize: "12px",
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "8px",
    },
  },
}));
const Totallikes = ({ likeCount, commentCount }) => {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-row p-2 md:p-3 mt-3">
        <div className={`md:w-32 flex flex-row ${classes.moreimg}`}>
          <img
            src={more1}
            alt="more1"
            className={`border border-green-400 rounded-full ${classes.more1}`}
          />
          <img
            src={more2}
            alt="more2"
            className={`border border-green-400 rounded-full ${classes.more2}`}
          />
          <img
            src={more3}
            alt="more3"
            className={`border border-green-400 rounded-full ${classes.more3}`}
          />
          <img
            src={more4}
            alt="more4"
            className={`border border-green-400 rounded-full ${classes.more4}`}
          />
        </div>
        <div className="w-1/3 flex flex-col text-left md:pl-3 ">
          <p className="text-sm md:text-base">Abu Hurairah</p>
          <p className={`text-slate-300 ${classes.liked}`}>
            <i className={classes.liked}>and a 100 more liked this</i>
          </p>
        </div>
        <div className="w-5/12 flex flex-row text-left md:pl-3 items-center justify-evenly">
          <p className="xl:pr-6 text-xs md:text-base">
            <span>
              <FavoriteBorderIcon className={classes.lcsicons} />
            </span>
            <i> {likeCount}</i>
          </p>
          <div className="flex flex-row xl:pr-6 items-center">
            <span>
              <img
                src={fillshare}
                alt="fillshare"
                className={classes.lcsicons1}
              />
            </span>
            <p className="md:pl-2 text-xs md:text-base">
              <i> 24K</i>
            </p>
          </div>
          <p className="text-xs md:text-base">
            <span>
              <ChatBubbleIcon className={classes.lcsicons} />
            </span>
            <i>{commentCount}</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Totallikes;
