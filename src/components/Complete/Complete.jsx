import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Steppers from "../Stepper/Stepper";
import Signup from "./res/Signup.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  mainCon: {
    height: "67vh",
  },
  img: {
    height: "360px",
    marginTop: "7%",
  },
  form: {
    [theme.breakpoints.down(426)]: {
      paddingLeft: "1%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "1%",
    },
    [theme.breakpoints.between(768, 1280)]: {
      paddingLeft: "0%",
    },
  },
  imgcon: {
    [theme.breakpoints.between(319, 768)]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.between(768, 1280)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const Complete = () => {
  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem("setpperId", 5);
  }, []);

  return (
    <>
      <div className="mainCon ">
        <div className="navbar  mb-2">
          <Navbar />
        </div>
        <p className="font-bold text-2xl lg:text-3xl mb-8">
          Tell us a bit about your nearest masjid.
        </p>
        <div className="stepper">
          <Steppers />
        </div>
        <div className={`flex flex-col lg:flex-row  ${classes.mainCon}`}>
          <div className={`h-max w-full  lg:w-1/2 ${classes.imgcon}`}>
            <img
              src={Signup}
              alt="signup"
              className={`w-80 mt-5 md:mt-10 lg:mt-14 xl:ml-44 ${classes.img}`}
            />
          </div>
          <div className={`w-full lg:pl-0 lg:w-1/2 mt-5 ${classes.form}`}>
            <div className="completetext">
              <p className="font-bold md:text-2xl lg:text-2xl pt-5">
                Congratulation, you have successfully created your account.
              </p>
              <p className="font-bold md:text-2xl lg:text-2xl pt-16 lg:pr-5">
                {" "}
                We just sent you a confirmation email. Please confirm your
                account within 24 hours.
              </p>
            </div>
            <div className="btns mt-16  flex flex-row">
              <Link to="/Login">
                <p className=" h-12 w-44 mb-2 px-10 py-3 ml-20 md:ml-64 bg-green-400 rounded-md text-sm text-white font-bold">
                  Let me in <ArrowForwardIcon />{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Complete;
