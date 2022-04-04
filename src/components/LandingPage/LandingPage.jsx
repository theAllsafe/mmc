import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import rafiki from "./res/rafiki.svg";
// import Navbar from '../Navbar/Navbar';
import NavbarLan from "../Navbar/NavbarLan";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    height: "100vh",
    overflowX: "hidden",
  },
  main: {
    height: "90vh",
    [theme.breakpoints.between(319, 768)]: {
      width: "100%",
      height: "100vh",
      flexDirection: "column",
    },
    [theme.breakpoints.between(768, 1024)]: {
      width: "100%",
      height: "100vh",
      flexDirection: "column",
    },
  },
  left: {
    [theme.breakpoints.between(319, 768)]: {
      width: "100%",
      height: "100vh",
    },
    [theme.breakpoints.between(768, 1024)]: {
      width: "100%",
      height: "100vh",
    },
  },
  right: {
    backgroundColor: "#515F60",
    [theme.breakpoints.between(319, 768)]: {
      width: "100%",
      height: "100vh",
    },
    [theme.breakpoints.between(768, 1024)]: {
      width: "100%",
      height: "75vh",
    },
  },
  img: {
    height: "96%",
    width: "98%",
    margin: "10px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      {/* <Navbar /> */}
      <NavbarLan />
      <div className={`w-full flex lg:flex-row flex-column  ${classes.main}`}>
        <div className={`lg:w-1/2 h-full bg-white ${classes.left}`}>
          <img
            src={rafiki}
            alt="logo"
            className={` md:h-4/5 lg:h-4/5 ml-14  mt-8 md:ml-32 md:mb-10 lg:mt-14 lg:ml-24 ${classes.img}`}
          />
        </div>
        <div className={`lg:w-1/2 h-full  ${classes.right}`}>
          <p className="tx pl-2 w-5/6 text-base lg:text-2xl text-right font-bold mt-16 lg:h-24 lg:pt-48 xl:pt-52">
            Share you thoughts, write blog posts, show your favourite articles,
            ask for the best services around you and much more!
          </p>
          <div className="btnbox32 pt-20 lg:pt-52 lg:pl-60 mb-10">
            <Link
              to="/SignupOption"
              className="btn12 h-10 w-28 rounded-md text-white font-bold"
            >
              Sign up
            </Link>
            <Link
              to="/Login"
              className="btn13 px-6 py-2.5 ml-8 rounded-md text-white font-bold lg:mb-10"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
