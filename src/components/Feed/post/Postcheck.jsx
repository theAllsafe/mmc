import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import postcheck from "../res/postcheck.svg";
import Job from "../res/Job.svg";
import Requirement from "../res/Requirement.svg";
import Adv from "../res/Adv.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Piping from "../res/Piping.svg";
import Fish from "../res/Fish.svg";
import filesearch from "../res/filesearch.svg";
import { useDispatch, useSelector } from "react-redux";
import { getJobList } from "../../../store/actions/JobAction";
import moment from "moment";

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
  sbox: {
    height: "57px",
    width: "57px",
    borderRadius: "8px",
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
}));

const Postcheck = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { jobList } = useSelector((state) => state.job);
  useEffect(() => {
    dispatch(getJobList());
  }, []);
  console.log("job", jobList);
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
              className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center cursor-pointer ${classes.vborder}`}
              onClick={HandleJob}
            >
              <img src={Job} alt="jobicon" />
              <p className="text-xs" style={{ color: jobColor }}>
                JOB
              </p>
            </div>
            <div
              className={`border-r-2 border-slate-400 h-14 flex justify-center flex-col items-center cursor-pointer ${classes.vborder}`}
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
              className="h-14  mx-auto flex flex-col items-center cursor-pointer"
              onClick={HandleAdv}
            >
              <img src={Adv} alt="Advicon" />
              <p className="text-xs" style={{ color: advColor }}>
                ADVERT
              </p>
            </div>
          </div>
          <div>
            {content === "job" ? (
              <>
                {jobList &&
                  jobList.map((job) => {
                    return (
                      <>
                        <div>
                          <p className="border-t border-slate-400 my-2"></p>
                          <div
                            className="grid grid-cols-3 mx-auto w-75"
                            key={job.id}
                          >
                            <div className="h-14  mx-auto">
                              <img
                                src={job.image}
                                alt="Pipingicon"
                                className="h-12 w-12 border border-green-400 rounded-full"
                              />
                            </div>
                            <div className="h-14 text-left">
                              <p className={`text-bolder ${classes.tjob}`}>
                                {job.title}
                              </p>
                              <p className={classes.ttxt}>
                                <i>{job.description}</i>
                              </p>
                              <p className={`text-red-300 ${classes.ttxt}`}>
                                {moment(job.createdAt).format("DD-MM-YYYY")}
                              </p>
                            </div>
                            <div className="h-14 mx-auto">
                              <img
                                src={filesearch}
                                alt="Pipingicon"
                                className="pt-3 pl-3"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </>
            ) : null}
            {content === "req" ? (
              <>
                <div>
                  <p className="border-t border-slate-400 my-2"></p>
                  <div className="grid grid-cols-3 mx-auto w-75">
                    <div className="h-14 mx-auto">
                      <div className={` ${classes.sbox}`}>
                        <img
                          src={Piping}
                          alt="Pipingicon"
                          className="pt-3 pl-3"
                        />
                      </div>
                    </div>
                    <div className="h-14 text-left">
                      <p className={`text-bolder ${classes.tjob}`}>
                        You posted a req
                      </p>
                      <p className={classes.ttxt}>
                        <i>10 days ago</i>
                      </p>
                      <p className={`text-red-300 ${classes.ttxt}`}>
                        in PLUMBERS
                      </p>
                    </div>
                    <div className="h-14 mx-auto">
                      <img
                        src={filesearch}
                        alt="Pipingicon"
                        className="pt-3 pl-3"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="border-t border-slate-400 my-2"></p>
                  <div className="grid grid-cols-3 mx-auto w-75">
                    <div className="h-14 mx-auto">
                      <div className={` ${classes.sbox}`}>
                        <img src={Fish} alt="Fishicon" className="pt-3 pl-3" />
                      </div>
                    </div>
                    <div className="h-14 text-left">
                      <p className={`text-bolder ${classes.tjob}`}>
                        You posted a req
                      </p>
                      <p className={classes.ttxt}>
                        <i>10 days ago</i>
                      </p>
                      <p className={`text-red-300 ${classes.ttxt}`}>
                        in FISHERIES
                      </p>
                    </div>
                    <div className="h-14 mx-auto">
                      <img
                        src={filesearch}
                        alt="Pipingicon"
                        className="pt-3 pl-3"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {content === "adv" ? (
              <>
                <div>
                  <p className="border-t border-slate-400 my-2"></p>
                  <div className="grid grid-cols-3 mx-auto w-75">
                    <div className="h-14 mx-auto">
                      <div className={` ${classes.sbox}`}>
                        <img
                          src={Piping}
                          alt="Pipingicon"
                          className="pt-3 pl-3"
                        />
                      </div>
                    </div>
                    <div className="h-14 text-left">
                      <p className={`text-bolder ${classes.tjob}`}>
                        You posted a ad
                      </p>
                      <p className={classes.ttxt}>
                        <i>10 days ago</i>
                      </p>
                      <p className={`text-red-300 ${classes.ttxt}`}>
                        in PLUMBERS
                      </p>
                    </div>
                    <div className="h-14 mx-auto">
                      <img
                        src={filesearch}
                        alt="Pipingicon"
                        className="pt-3 pl-3"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="border-t border-slate-400 my-2"></p>
                  <div className="grid grid-cols-3 mx-auto w-75">
                    <div className="h-14 mx-auto">
                      <div className={` ${classes.sbox}`}>
                        <img src={Fish} alt="Fishicon" className="pt-3 pl-3" />
                      </div>
                    </div>
                    <div className="h-14 text-left">
                      <p className={`text-bolder ${classes.tjob}`}>
                        You posted a ad
                      </p>
                      <p className={classes.ttxt}>
                        <i>10 days ago</i>
                      </p>
                      <p className={`text-red-300 ${classes.ttxt}`}>
                        in FISHERIES
                      </p>
                    </div>
                    <div className="h-14 mx-auto">
                      <img
                        src={filesearch}
                        alt="Pipingicon"
                        className="pt-3 pl-3"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Postcheck;
