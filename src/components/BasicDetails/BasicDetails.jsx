import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./BasicDetails.css";
import Steppers from "../Stepper/Stepper";
import Signup from "./res/Signup.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RepeatIcon from "@mui/icons-material/Repeat";
import { api } from "../../helper/instance";
import { useHistory } from "react-router-dom";
import { emailvalidation, phonevalidation } from "../../helper/utils";

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
      paddingLeft: "12%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "4%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      paddingLeft: "14%",
    },
  },
  imgcon: {
    [theme.breakpoints.between(319, 426)]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.between(767, 1280)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const BasicDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  let params = new URLSearchParams(window.location.search).get("type");
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    accountType: params,
  });
  const [otp, setOtp] = useState({
    otpValue: "",
  });
  const [isvalid, setIsValid] = useState(false);
  const [showebox, setShowEBox] = useState(false);
  const [showpbox, setShowPBox] = useState(false);
  const [ebtnColor, setEBtnColor] = useState("#46D490");
  const [pbtnColor, setPBtnColor] = useState("#46D490");

  useEffect(() => {
    localStorage.setItem("setpperId", 1);
  }, []);
  const displayEmailCode = () => {
    if (emailvalidation(data.email)) {
      setIsValid(true);
      api
        .post(`user/signInEmailToOtp`, { email: body.email })
        .then((res) => console.log("otp", res))
        .catch((error) => console.log(error));
      console.log(body.email);
      setShowEBox(true);
      ebtnColor === "#46D490"
        ? setEBtnColor("#5C5C5C")
        : setEBtnColor("#5C5C5C");
    } else {
      setIsValid(false);
    }
  };
  const displayPhoneCode = () => {
    if (phonevalidation(data.phone)) {
      setIsValid(true);
      api
        .post(`user/signInPhoneToOtp`, { phone: body.phone })
        .then((res) => console.log("otp", res))
        .catch((error) => console.log(error));
      console.log(body.phone);
      setShowPBox(true);
      pbtnColor === "#46D490"
        ? setPBtnColor("#5C5C5C")
        : setPBtnColor("#5C5C5C");
    } else {
      setIsValid(false);
    }
  };

  const verifyEmailCode = () => {
    api
      .post(`user/signInVerifyEmail`, {
        otpValue: parseInt(otpData.otpValue),
        metaValue: data.email,
      })
      .then((res) => {
        console.log("verifyotp", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyPhoneCode = () => {
    api
      .post(`user/signInVerifyPhone`, {
        otpValue: parseInt(otpData.otpValue),
        metaValue: data.phone,
      })
      .then((res) => {
        console.log("verifyotp", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputData = (e) => {
    const { value, name } = e.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const otpInputData = (e) => {
    const { value, name } = e.target;

    setOtp((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const body = {
    ...data,
  };

  const otpData = {
    ...otp,
  };

  const basic = (event) => {
    event.preventDefault();
    // console.log(body);
    api
      .post(`user/personal`, body)
      .then((res) => {
        console.log("person", res.data);
        history.push("/OtherDetails/" + res.data.data.id);
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
        Tell us about yourself.
      </p>
      <div className="stepper">
        <Steppers />
      </div>
      <div className={`flex flex-col lg:flex-row ${classes.mainCon}`}>
        <div className={`h-max f-full lg:w-1/2  ${classes.imgcon}`}>
          <img
            src={Signup}
            alt="signup"
            className={`w-80 md:mt-10 lg:mt-14 xl:ml-44 ${classes.img}`}
          />
        </div>
        <div className={`w-full lg:pl-0 lg:w-1/2 mt-5 ${classes.form}`}>
          <div className="fullname flex flex-col lg:flex-row">
            <div className="fname text-left ">
              <label className="form-label text-sm font-bold pl-2">
                First name
              </label>
              <br />
              <input
                className="h-12 w-4/5 lg:w-56 text-sm text-black border border-black rounded-xl px-5 mt-2"
                type="text"
                name="fName"
                placeholder="Enter your first name"
                value={data.fName}
                onChange={inputData}
                required
              ></input>
            </div>
            <div className="lname lg:pl-8 xl:pl-20 text-left">
              <label className="form-label text-sm font-bold ">Last name</label>
              <br />
              <input
                className="h-12 w-4/5 lg:w-56  text-sm border border-black rounded-xl px-5 mt-2"
                type="text"
                name="lName"
                value={data.lName}
                placeholder="Enter your last name"
                onChange={inputData}
                required
              ></input>
            </div>
          </div>
          <div className="email text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              E-mail id
            </label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="email"
              name="email"
              value={data.email}
              placeholder="email@gmail.com"
              onChange={inputData}
              required
            />

            {data.email.length > 0 ? (
              <>
                <button
                  onClick={displayEmailCode}
                  style={{ backgroundColor: ebtnColor }}
                  className="h-8 w-16 z-10 right-20 relative  rounded-xl text-sm text-white "
                  type=""
                >
                  OTP
                </button>
                <div className={showebox === true ? "flex flex-row" : "show"}>
                  <input
                    className="h-12 w-6/12 text-sm border border-black rounded-xl px-5 mt-2 mr-2"
                    type="text"
                    name="otpValue"
                    value={otp.otpValue}
                    onChange={otpInputData}
                    inputMode="numeric"
                    placeholder="Enter the code sent on your mail"
                    autoComplete="one-time-code"
                    maxLength="10"
                    required
                  />
                  <button
                    onClick={verifyEmailCode}
                    style={{ backgroundColor: ebtnColor }}
                    className="h-8 w-16 z-10 mt-4 right-20 relative  rounded-xl text-sm text-white "
                    type=""
                  >
                    verify
                  </button>
                  <div>
                    <p className="text-sm">Have’nt recieved the code.</p>
                    <p className="text-sm font-bold" style={{ color: "red" }}>
                      {" "}
                      <RepeatIcon />
                      Resend code
                    </p>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="phone number text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Phone Number
            </label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="tel"
              name="phone"
              value={data.phone}
              placeholder="0123456789"
              minLength="10"
              maxLength="10"
              onChange={inputData}
              required
            />

            {data.phone.length > 0 ? (
              <>
                <button
                  onClick={displayPhoneCode}
                  style={{ backgroundColor: pbtnColor }}
                  className="h-8 w-16 z-10 right-20 relative bg-green-400 rounded-xl text-sm text-white "
                  type=""
                >
                  OTP
                </button>
                <div className={showpbox === true ? "flex flex-row" : "show"}>
                  <input
                    className="h-12 w-6/12 text-sm border border-black rounded-xl px-5 mt-2 mr-2"
                    type="text"
                    name="otpValue"
                    value={otp.otpValue}
                    onChange={otpInputData}
                    inputMode="numeric"
                    placeholder="Enter the code sent on your phone"
                    autoComplete="one-time-code"
                    required
                  />
                  <button
                    onClick={verifyPhoneCode}
                    style={{ backgroundColor: ebtnColor }}
                    className="h-8 w-16 z-10 mt-4 right-20 relative  rounded-xl text-sm text-white "
                    type=""
                  >
                    verify
                  </button>
                  <div>
                    <p className="text-sm">Have’nt recieved the code.</p>
                    <p className="text-sm font-bold" style={{ color: "red" }}>
                      {" "}
                      <RepeatIcon />
                      Resend code
                    </p>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            <div className="btns mt-10  mb-3 lg:mb-0  flex flex-row">
              <Link to="/SignupOption">
                <p className=" h-15 w-36 px-8 py-2.5 bg-gray-500 rounded-md text-sm text-white font-bold">
                  {" "}
                  <ArrowBackIcon /> Back{" "}
                </p>
              </Link>
              <Link to="/OtherDetails">
                <p
                  className=" h-15 w-36 px-10 py-2.5 mb-3 ml-4 md:ml-60 lg:ml-30 lg:ml-48 bg-green-400 rounded-md text-sm text-white font-bold"
                  onClick={basic}
                >
                  Next <ArrowForwardIcon />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
