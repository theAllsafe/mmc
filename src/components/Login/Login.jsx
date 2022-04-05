import React from "react";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import individualSu from "./res/individualSu.svg";
import mosqueSu from "./res/mosqueSu.svg";
import businessSu from "./res/businessSu.svg";
import waqfSu from "./res/waqfSu.svg";
// import Stepper from '../Stepper/Stepper'

const useStyles = makeStyles((theme) => ({
  btn12: {
    backgroundColor: "rgba(70, 212, 144, 1)",
  },

  individual: {
    "&:hover": {
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      transform: "scale(1.1)",
    },
    backgroundColor: "rgba(81, 95, 96, 1)",
    [theme.breakpoints.down(426)]: {
      margin: "auto",
      marginTop: "2rem",
    },
    [theme.breakpoints.down(376)]: {
      margin: "auto",
      marginTop: "2rem",
      marginBottom: "8px",
    },
    [theme.breakpoints.down(321)]: {
      margin: "auto",
      marginTop: "2rem",
      marginBottom: "8px",
    },
    [theme.breakpoints.between(768, 1080)]: {
      margin: "auto",
      marginTop: "2rem",
      marginBottom: "8px",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="mb-2">
        <Navbar />
      </div>
      <div className="headtxt mb-8 text-left pl-10 pt-8">
        <p className="font-bold">Welcome back,</p>
        <p className="font-bold text-2xl lg:text-3xl pt-2">
          Good to see you again.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-20 md:gap-x-0 lg:gap-x-20">
        <div
          className={`h-80 lg:w-44 xl:w-56 w-56 bg-slate-600 grid justify-items-center rounded-3xl md:mt-16  lg:col-start-2 ${classes.individual}`}
        >
          <p className="text-white text-xl pt-2">
            <u>
              <b>Individual</b>
            </u>
          </p>
          <img
            src={individualSu}
            alt="logo"
            className={`h-28 w-3/5 mt-2 ${classes.img}`}
          />
          <p className="text-white px-4 text-sm my-3">
            Log in to connect to others and do some amazing things.
          </p>
          <Link
            to="/IndividualLogin"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-3 mb-3 pt-1 ${classes.btn12}`}
          >
            Log in
          </Link>
        </div>
        <div
          className={`h-80 lg:w-44 xl:w-56 w-56 bg-slate-600 grid justify-items-center rounded-3xl mt-16  lg:col-start-3 ${classes.individual}`}
        >
          <p className="text-white text-xl pt-2">
            <u>
              <b>Mosque</b>
            </u>
          </p>
          <img
            src={mosqueSu}
            alt="logo"
            className={`h-28 w-3/5 mt-2 ${classes.img}`}
          />
          <p className="text-white px-4 text-sm my-3">
            Log in to mosque account to be able to connect to your social
            circle.
          </p>
          <Link
            to="/MosqueLogin"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-3 mb-3 pt-1 ${classes.btn12}`}
          >
            Log in
          </Link>
        </div>
        <div
          className={`h-80 lg:w-44 xl:w-56 w-56 bg-slate-600 grid justify-items-center rounded-3xl md:mt-16 lg:col-start-4 ${classes.individual}`}
        >
          <p className="text-white text-xl pt-2">
            <u>
              <b>Business</b>
            </u>
          </p>
          <img
            src={businessSu}
            alt="logo"
            className={`h-28 w-3/5 mt-2 ${classes.img}`}
          />
          <p className="text-white px-4 text-sm xl:my-3">
            Log in to business account and get connected instantly to millions
            of Halal businesses around the world.
          </p>
          <Link
            to="/BusinessLogin"
            className={`h-8 w-36 rounded-xl text-white font-normal md:mt-1 lg:mt-1.5 mb-3 pt-1 ${classes.btn12}`}
          >
            Log in
          </Link>
        </div>
        <div
          className={`h-80 lg:w-44 xl:w-56 w-56 mb-2 bg-slate-600 grid justify-items-center rounded-3xl mt-16 lg:col-start-5 ${classes.individual}`}
        >
          <p className="text-white text-xl pt-2">
            <u>
              <b>Waqf</b>
            </u>
          </p>
          <img
            src={waqfSu}
            alt="logo"
            className={`h-28 w-3/5 mt-2 ${classes.img}`}
          />
          <p className="text-white px-4 text-sm my-3">
            Log in to Waqf property account and explore your nearest Waqf
            property.
          </p>
          <Link
            to="/WaqfLogin"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-2 mb-3 pt-1  ${classes.btn12}`}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
