import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Steppers from "../Stepper/Stepper";
import Signup from "./res/Signup.png";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { api } from "../../helper/instance";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  mainCon: {
    height: "67vh",
  },
  form: {
    [theme.breakpoints.down(426)]: {
      paddingLeft: "12%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "4%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      paddingLeft: "20%",
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

const Password = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const [pass, setPass] = useState({
    password: "",
    cpassword: "",
    id: parseInt(params.id),
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    localStorage.setItem("setpperId", 4);
  }, []);

  const inputData = (e) => {
    const { value, name } = e.target;

    setPass((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const body = {
    ...pass,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(body);

    await api
      .post(`user/password`, body)
      .then((res) => {
        console.log("password", res.data);
        history.push("/Complete");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
        <div className={`h-max f-full lg:w-1/2 ${classes.imgcon}`}>
          <img
            src={Signup}
            alt="signup"
            className={`w-80 mt-10 lg:mt-14 xl:ml-44  ${classes.img}`}
          />
        </div>
        <div className={`w-full lg:pl-0 lg:w-1/2 mt-5 ${classes.form}`}>
          <div className="email text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Create a passwrod
            </label>
            <br />
            <input
              className="h-12 w-4/5 lg:w-3/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="password"
              name="password"
              value={pass.password}
              onChange={inputData}
              placeholder="choose a strong password"
              required
            />
          </div>
          <div className="phone number text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Verify your password
            </label>
            <br />
            <input
              className="h-12 w-4/5 lg:w-3/5 text-sm border border-black rounded-xl px-5 mt-2"
              type={passwordShown ? "text" : "password"}
              name="cpassword"
              value={pass.cpassword}
              onChange={inputData}
              placeholder="Type your password again"
              required
            />
            <button
              onClick={togglePassword}
              className="h-8 w-16 z-10 right-20 relative text-green-400 bg-transparent rounded-xl text-sm  "
              type=""
            >
              {" "}
              {!passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
            </button>
            <div className="btns mt-10  mb-3 lg:mb-0 flex flex-row">
              <Link to="/UploadProfilePage">
                <p className=" h-15 w-36 px-8 py-2.5 bg-gray-500 rounded-md text-sm text-white font-bold">
                  {" "}
                  <ArrowBackIcon /> Back{" "}
                </p>
              </Link>
              <Link to="/Complete">
                <p
                  className=" h-15 w-36 px-10 py-2.5 mb-3 ml-4 md:ml-24 lg:ml-30  bg-green-400 rounded-md text-sm text-white font-bold"
                  onClick={handleSubmit}
                >
                  Next <ArrowForwardIcon />{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
