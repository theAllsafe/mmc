import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import more4 from "./res/more4.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  local: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "15px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  localtxt: {
    fontSize: "11px",
    [theme.breakpoints.between(1024, 1280)]: {
      fontSize: "9px",
    },
  },
  localbotxt: {
    fontSize: "10px",
    [theme.breakpoints.between(1024, 1280)]: {
      fontSize: "8px",
    },
  },
}));

const Localjobs = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.local}`}>
        <div className="grid grid-cols-6">
          <div className="col-span-5 ">
            <p className="text-xl py-3 text-center">Local Jobs</p>
          </div>
          <div className="col-span-1 py-3">
            <MoreVertIcon />
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={more4}
                alt="more4"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left mb-3 lg:mb-0 xl:mb-3">
              <p className="text-lg text-bolder">Anwar Ibrahim</p>
              <p className={classes.localtxt}>
                {" "}
                <i>Needs a plumber on 26th Jan</i>
              </p>
              <p className={classes.localbotxt}>
                <span>
                  <AccessTimeIcon style={{ fontSize: "14px" }} />
                </span>{" "}
                3 days work{" "}
                <span>
                  <FmdGoodIcon style={{ fontSize: "14px" }} />
                </span>
                15km away
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <VisibilityOffIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={more4}
                alt="more4"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left mb-3 lg:mb-0 xl:mb-3">
              <p className="text-lg text-bolder">Anwar Ibrahim</p>
              <p className={classes.localtxt}>
                <i>Needs a plumber on 26th Jan</i>
              </p>
              <p className={classes.localbotxt}>
                <span>
                  <AccessTimeIcon style={{ fontSize: "14px" }} />
                </span>{" "}
                3 days work{" "}
                <span>
                  <FmdGoodIcon style={{ fontSize: "14px" }} />
                </span>
                15km away
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <VisibilityIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={more4}
                alt="more4"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left">
              <p className="text-lg text-bolder">Anwar Ibrahim</p>
              <p className={classes.localtxt}>
                <i>Needs a plumber on 26th Jan</i>
              </p>
              <p className={classes.localbotxt}>
                <span>
                  <AccessTimeIcon style={{ fontSize: "14px" }} />
                </span>{" "}
                3 days work{" "}
                <span>
                  <FmdGoodIcon style={{ fontSize: "14px" }} />
                </span>
                15km away
              </p>
            </div>
            <div className="h-14 col-span-1 mx-auto">
              <VisibilityIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Localjobs;
