import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import profileicon from "./res/profile.svg";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  recommended: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "20px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));

const Recommendedjobs = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.recommended}`}>
        <div className=" w-5/6 lg:w-11/12 py-3 flex justify-between lg:justify-evenly  mx-auto">
          <p className="lg:text-xl">Recommended Jobs</p>
          <div>
            <MoreVertIcon />
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={profileicon}
                alt="img1"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>
                Zain Architecture
              </p>
              <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
              <p className="text-xs">
                <i>3 days ago</i>
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={profileicon}
                alt="img1"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>
                Pumps & Pipes
              </p>
              <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
              <p className="text-xs">
                <i>10 days ago</i>
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={profileicon}
                alt="img1"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                Kissan Plumbings
              </p>
              <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
              <p className="text-xs">
                <i>3 hour ago</i>
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={profileicon}
                alt="img1"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>
                Areeb Fisheries
              </p>
              <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
              <p className="text-xs">
                <i>3 days ago</i>
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={profileicon}
                alt="img1"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p style={{ fontSize: "15px", fontWeight: "600" }}>
                Ahsan Motors
              </p>
              <p style={{ fontSize: "11px" }}>Posted job in Plumbers</p>
              <p className="text-xs">
                <i>3 days ago</i>
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <BookmarkBorderIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendedjobs;
