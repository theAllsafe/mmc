import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import postcheck from "./res/postcheck.svg";
import Job from "./res/Job.svg";
import Requirement from "./res/Requirement.svg";
import Adv from "./res/Adv.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  post: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "15px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  postcheck: {
    marginTop: "13px",
    marginLeft: "30px",
  },
  vborder: {
    left: "2%",
    position: "relative",
    height: "48px",
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
      right: "27%",
      [theme.breakpoints.between(320, 426)]: {
        right: "33%",
        width: "6px",
        height: "6px",
      },
      [theme.breakpoints.between(426, 1024)]: {
        right: "40%",
      },
      [theme.breakpoints.between(1024, 1441)]: {
        right: "31%",
      },
      [theme.breakpoints.between(1441, 2561)]: {
        right: "32%",
      },
    },
  },

  img5: {
    marginTop: "13px",
  },
}));

const Postcheck = () => {
  const classes = useStyles();
  const [jobColor, setJobColor] = useState("#FFFFFF");
  const [reqColor, setReqColor] = useState("#545A70");
  const [advColor, setAdvColor] = useState("#545A70");
  const [content, setContent] = useState("job");

  const HandleJob = () => {
    setAdvColor("#545A70");
    setReqColor("#545A70");
    setJobColor("#FFFFFF");
    setContent("job");
  };
  const HandleReq = () => {
    setAdvColor("#545A70");
    setReqColor("#FFFFFF");
    setJobColor("#545A70");
    setContent("req");
  };
  const HandleAdv = () => {
    setAdvColor("#FFFFFF");
    setReqColor("#545A70");
    setJobColor("#545A70");
    setContent("adv");
  };

  return (
    <>
      <div className={`mt-3 mx-auto ${classes.post}`}>
        <div className="grid grid-cols-6 mx-auto w-100">
          <div className="mx-auto">
            <img
              src={postcheck}
              alt="postcheck"
              className={classes.postcheck}
            />
          </div>
          <div className="col-span-4 text-left">
            <p className="lg:text-xl text-center py-3">POST</p>
          </div>
          <div className="col-span-1 mx-auto">
            <MoreVertIcon className={classes.img5} />
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-3 mx-auto w-75">
            <div
              className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`}
              onClick={HandleJob}
            >
              <img src={Job} alt="jobicon" />
              <p className="text-xs" style={{ color: jobColor }}>
                JOB
              </p>
            </div>
            <div
              className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center ${classes.vborder}`}
              onClick={HandleReq}
            >
              <img src={Requirement} alt="Requirementicon" />
              <p
                className="text-xs"
                style={{ fontSize: "11px", color: reqColor }}
              >
                REQUIREMENT
              </p>
            </div>
            <div
              className="h-14  mx-auto flex flex-col items-center"
              onClick={HandleAdv}
            >
              <img src={Adv} alt="Advicon" />
              <p className="text-xs" style={{ color: advColor }}>
                ADVERT
              </p>
            </div>
            <div>
              <h1>{content}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postcheck;
