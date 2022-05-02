import React from "react";
import masjidicon1 from "./res/masjidicon1.svg";
import veracc from "./res/veracc.svg";
import call from "./res/call.svg";
import message from "./res/message.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  visitedmasjid: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  loctxt: {
    [theme.breakpoints.between(1024, 1280)]: {
      fontSize: "11px",
    },
  },
  verify: {
    position: "relative",
    left: "80%",
    bottom: "87%",
    [theme.breakpoints.between(375, 426)]: {
      left: "71%",
    },
    [theme.breakpoints.between(426, 531)]: {
      left: "56%",
    },
    [theme.breakpoints.between(531, 600)]: {
      left: "50%",
    },
    [theme.breakpoints.between(600, 768)]: {
      left: "46%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      left: "39%",
    },
    [theme.breakpoints.between(1024, 1280)]: {
      left: "92%",
    },
    [theme.breakpoints.between(1280, 1440)]: {
      left: "88%",
    },
  },
  verify1: {
    position: "relative",
    left: "60%",
    bottom: "79%",
    [theme.breakpoints.between(375, 426)]: {
      left: "53%",
    },
    [theme.breakpoints.between(426, 531)]: {
      left: "43%",
    },
    [theme.breakpoints.between(531, 600)]: {
      left: "38%",
    },
    [theme.breakpoints.between(600, 768)]: {
      left: "35%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      left: "28%",
    },
    [theme.breakpoints.between(1024, 1280)]: {
      left: "69%",
    },
    [theme.breakpoints.between(1280, 1440)]: {
      left: "66%",
    },
  },
}));

const Musjidlist = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.visitedmasjid}`}>
        <p className="text-xl py-3">My Primary Masjid</p>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="h-28 grid grid-cols-7 gap-1 ">
            <div className="col-span-2">
              <div className="h-28 w-20 bg-slate-500 rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="text-sm">Masjid Hira</p>
              </div>
              <img src={veracc} alt="verify" className={` ${classes.verify}`} />
            </div>
            <div className="col-span-2 flex ml-4 mt-3">
              <div className="flex flex-col justify-start">
                <p className="text-left text-sm lg:text-xs xl:text-sm">Name</p>
                <p className="text-left text-sm lg:text-xs xl:text-sm">
                  Location
                </p>
                <p className="text-left text-sm lg:text-xs xl:text-sm">Imam</p>
                <p className="text-left text-sm lg:text-xs xl:text-sm">
                  Mutawalli
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex flex-col mt-3">
                <p className="text-left text-sm lg:text-xs xl:text-sm">
                  Masjid Hira
                </p>
                <p className={`text-left text-sm xl:text-sm ${classes.loctxt}`}>
                  Aishbagh Lucknow
                </p>
                <p className="text-left text-sm lg:text-xs xl:text-sm flex flex-row items-center">
                  : Hasan{" "}
                  <span className="pl-2">
                    <img src={call} alt="call" />
                  </span>{" "}
                  <span className="pl-2">
                    <img src={message} alt="message" />
                  </span>
                </p>
                <p className="text-left text-sm lg:text-xs xl:text-sm flex flex-row items-center">
                  : Abdulah{" "}
                  <span className="pl-2">
                    <img src={call} alt="call" />
                  </span>{" "}
                  <span className="pl-2">
                    <img src={message} alt="message" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="border-t border-slate-400 my-2"></p>
        </div>
        <div>
          <p className="py-2 pl-3 text-left">Masjid You have Visited</p>
          <div className="masjjids grid grid-cols-6 ">
            <div className="col-span-2">
              <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 12th jan</i>
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 2nd may</i>
                </p>
              </div>
              <img
                src={veracc}
                alt="verify"
                className={` ${classes.verify1}`}
              />
            </div>
            <div className="col-span-2">
              <div className="h-28 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 2nd may</i>
                </p>
              </div>
            </div>
          </div>
          <div className="masjjids grid grid-cols-6 ">
            <div className="col-span-2">
              <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 12th jan</i>
                </p>
              </div>
              <img
                src={veracc}
                alt="verify"
                className={` ${classes.verify1}`}
              />
            </div>
            <div className="col-span-2">
              <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 2nd may</i>
                </p>
              </div>
              <img
                src={veracc}
                alt="verify"
                className={` ${classes.verify1}`}
              />
            </div>
            <div className="col-span-2">
              <div className="h-20 w-20  rounded-xl flex flex-col justify-center items-center ml-2 relative">
                <img
                  src={masjidicon1}
                  alt="masjid"
                  className={`w-16 h-16 border-0 rounded-full ${classes.masjidicon1}`}
                />
                <p className="" style={{ fontSize: "8px" }}>
                  <i>Last Visited</i>
                </p>
                <p className="" style={{ fontSize: "8px" }}>
                  <i>on 2nd may</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Musjidlist;
