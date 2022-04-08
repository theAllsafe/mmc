import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import individualSu from "./res/individualSu.png";
import mosqueSu from "./res/mosqueSu.png";
import businessSu from "./res/businessSu.png";
import waqfSu from "./res/waqfSu.png";
import Stepper from "../Stepper/Stepper";

const useStyles = makeStyles((theme) => ({
  btn12: {
    backgroundColor: "rgba(70, 212, 144, 1)",
  },
  cards: {
    [theme.breakpoints.between(768, 1024)]: {
      justifyItems: "center"
    },
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
    },
  },
}));

const Signup = () => {
  const classes = useStyles();

  useEffect(() => {
    localStorage.setItem("setpperId", 0);
  }, []);

  return (
    <div>
      {" "}
      <div className="mb-2">
        <Navbar />
      </div>
      <div className="headtxt lg:text-3xl mb-8">
        Getting started, <b>Choose your account type</b>
      </div>
      <div>
        <Stepper />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-20 md:gap-x-0 lg:gap-x-20 ${classes.cards}`}>
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
            Create a public account to be able to do some awesome things.
          </p>
          <Link
            to="/BasicDetails?type=INDIVIDUAL"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-3 mb-3 pt-1 ${classes.btn12}`}
          >
            Sign up
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
            Create a mosque account to be able to connect to your social circle.
          </p>
          <Link
            to="/BasicDetails?type=MOSQUE"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-3 mb-3 pt-1 ${classes.btn12}`}
          >
            Sign up
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
          <p className="text-white px-4 text-sm md:my-0 my-3">
            Create a business account and get connected instantly to millions of
            Halal businesses around the world.
          </p>
          <Link
            to="/BasicDetails?type=BUSINESS"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-1 lg:mt-1.5 mb-4 lg:mb-3 pt-1 ${classes.btn12}`}
          >
            Sign up
          </Link>
        </div>
        <div
          className={`h-80 lg:w-44 xl:w-56 w-56 bg-slate-600 grid justify-items-center rounded-3xl mt-16 lg:col-start-5 ${classes.individual}`}
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
            Create a Waqf property account and Enlist your nearest Waqf
            property.
          </p>
          <Link
            to="/BasicDetails?type=WAQF"
            className={`h-8 w-36 rounded-xl text-white font-normal mt-2 mb-3 pt-1 ${classes.btn12}`}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
