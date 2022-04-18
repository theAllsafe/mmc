import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FeedNav from "./FeedNav";
import publish from "./res/publish.svg";
import ImageIcon from "@mui/icons-material/Image";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Postcreate from "./post/Postcreate";
import Postlist from "./post/Postlist";
import Namaztable from "./Namaztable";
import Musjidlist from "./Musjidlist";
import Help from "./Help";
import Purchase from "./Purchase";
import Advert from "./Advert";
import Postcheck from "./post/Postcheck";
import Localjobs from "./Localjobs";
import Recommendedjobs from "./Recommendedjobs";
import FontLoader from "./FontLoader";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  tjob: {
    fontSize: "13px",
    [theme.breakpoints.between(1024, 1280)]: {
      fontSize: "11px",
    },
  },
  ttxt: {
    fontSize: "12px",
    [theme.breakpoints.between(1024, 1280)]: {
      fontSize: "8px",
    },
  },
  sbox: {
    height: "57px",
    width: "57px",
    borderRadius: "8px",
    background: "#545A70",
  },
  writes: {
    background: "#202836",
    borderRadius: "20px",
    color: "white",
    paddingBottom: "15px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  notif: {
    position: "relative",
    "&::after": {
      content: '" "',
      display: "block",
      height: 60,
      backgroundColor: "red",
      width: "8px",
      height: "8px",
      borderRadius: "50px",
      position: "absolute",
      top: 0,
      left: "98%",
      [theme.breakpoints.between(320, 426)]: {
        width: "6px",
        height: "6px",
      },
      [theme.breakpoints.between(550, 1024)]: {
        left: "100%",
        width: "6px",
        height: "6px",
      },
      [theme.breakpoints.between(1024, 2562)]: {
        left: "100%",
      },
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
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <div>
      {/* font-family */}
      <FontLoader />
      {/* navbar */}
      <FeedNav />
      <div className={`w-100 ${classes.maincont}`}>
        <div className="container mx-auto pt-3">
          <div
            className="grid lg:grid-cols-12 grid-cols-1 gap-3"
            style={{ fontFamily: "Raleway" }}
          >
            <div className="lg:col-span-3">
              {/* namaz timetable */}
              <Namaztable />
              {/* recommended job */}
              <Recommendedjobs />
              {/* Post check */}
              <Postcheck />
            </div>
            <div className="lg:col-span-6">
              <div
                className={`line text-xs md:text-base w-full md:w-3/4  flex flex-row justify-evenly text-slate-400 lg:mt-5 m-auto ${classes.menutxt}`}
              >
                <p
                  style={{ color: "#46D490" }}
                  className={`border-b-4 w-20 md:w-24 border-green-500 ${classes.menutxt}`}
                >
                  FEEDS
                </p>
                <p className={classes.notif}>MASJID</p>
                <p>FRIENDS</p>
                <p>GROUP</p>
              </div>
              <div className={`${classes.writes}`}>
                <div className="flex flex-row justify-evenly w-1full pt-2">
                  <div className="flex flex-row p-auto items-center font-bold">
                    {" "}
                    <span>
                      <img src={publish} alt="publish" />
                    </span>{" "}
                    <p className="pl-2">Publish</p>
                  </div>
                  <div className="flex flex-row border-x-2 border-slate-400 px-2.5 md:px-16 text-slate-400 ">
                    <ImageIcon />
                    <p className="pl-2">Pictures</p>
                  </div>
                  <p className="flex flex-row p-auto text-slate-400">
                    {" "}
                    <span className="pr-2">
                      <VideocamOutlinedIcon />
                    </span>
                    Videos
                  </p>
                </div>
                <p className="border-t border-slate-400 my-2"></p>

                {/* post create section*/}

                <Postcreate />
              </div>
              {/* post list */}
              <Postlist />
            </div>
            <div className="lg:col-span-3">
              {/* musjid list */}
              <Musjidlist />
              {/* local job */}
              <Localjobs />
              {/* need help  */}
              <Help />
              {/* purchase */}
              <Purchase />
              {/* advert */}
              <Advert />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
