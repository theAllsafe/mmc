import React, { useState } from "react";
import individualLo from "./res/individualLo.svg";
import processing from "./res/processing.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../../Navbar/Navbar";
import { api } from "../../../helper/instance";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setIsAuth } from "../../../store/actions/Auth";
import Cookies from "universal-cookie";

// import { SHOW_TOAST } from "../store/constant/types";

const useStyles = makeStyles((theme) => ({
  mainCon: {
    height: "67vh",
  },
  img: {
    height: "360px",
    marginTop: "7%",
  },
  form: {
    [theme.breakpoints.down(768)]: {
      paddingLeft: "12%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "4%",
    },
    [theme.breakpoints.between(768, 1081)]: {
      paddingLeft: "14%",
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

const IndividualLogin = () => {
  const classes = useStyles();
  const cookies = new Cookies();

  const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();

  const [email, setEmail] = useState({
    email: "",
  });

  const [password, setPassword] = useState({
    password: "",
  });

  const [phone, setPhone] = useState({
    phone: "",
  });

  const [otpValue, setOtpValue] = useState({
    otpValue: "",
  });

  const [hideEmail, setHideEmail] = useState(false);
  const [hidePhone, setHidePhone] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [ebtnColor, setEBtnColor] = useState("#46D490");
  const [pbtnColor, setPBtnColor] = useState("#46D490");
  const [otpVerify, setOtpVerify] = useState("verify");

  const displayEmailCode = () => {
    setShowResults(true);
    api
      .post(`user/logInOtpEmail`, { email: logindata.email })
      .then((res) => console.log("otp", res))
      .catch((error) => console.log(error));
    console.log(logindata.email);
    ebtnColor === "#46D490" ? setEBtnColor("#5C5C5C") : setEBtnColor("#5C5C5C");
  };

  const displayPhoneCode = () => {
    setShowResults(true);

    api
      .post(`user/logInOtpPhone`, { phone: logindata.phone })
      .then((res) => console.log("otp", res))
      .catch((error) => console.log(error));
    console.log(logindata.phone);
    pbtnColor === "#46D490" ? setPBtnColor("#5C5C5C") : setPBtnColor("#5C5C5C");
  };

  const otpVerifyHandler = (text) => {
    if (hidePhone === false) {
      api
        .post(`user/loginVerifyPhoneOtp`, {
          phone: logindata.phone,
          otpValue: parseInt(logindata.otpValue),
        })
        .then((res) => {
          console.log("verifyphoneotp", res);
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (hideEmail === false) {
      api
        .post(`user/loginVerifyEmailOtp`, {
          email: logindata.email,
          otpValue: parseInt(logindata.otpValue),
        })
        .then((res) => {
          console.log("verifyemailotp", res);
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (text === "verify") {
      setOtpVerify("otpLoading");
    }
    if (text === "otpLoading") {
      setOtpVerify("otpDone");
    }
    if (text === "otpDone") {
      setOtpVerify("otpDone");
    }
  };

  const emailInputData = (e) => {
    const { value, name } = e.target;
    setEmail((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    if (e.target.value === "") {
      setHideEmail(false);
      setHidePhone(false);
    } else {
      setHideEmail(false);
      setHidePhone(true);
    }
  };

  const phoneInputData = (e) => {
    const { value, name } = e.target;
    setPhone((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    if (e.target.value === "") {
      setHideEmail(false);
      setHidePhone(false);
    } else {
      setHideEmail(true);
      setHidePhone(false);
    }
  };

  const passwordInputData = (e) => {
    const { value, name } = e.target;
    setShowResults(false);

    setPassword((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const otpInputData = (e) => {
    const { value, name } = e.target;

    setOtpValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const logindata = {
    ...phone,
    ...email,
    ...password,
    ...otpValue,
  };

  const handleLogin = async () => {
    if (hidePhone === false) {
      await api
        .post(`user/logInWithPhone`, {
          phone: logindata.phone,
          password: logindata.password,
        })
        .then((res) => {
          console.log("loginwithphone", res);
          cookies.set("access_token", res.data.data.token);
          console.log(cookies.set("access_token", res.data.data.token));
          dispatch(setIsAuth(true));
          history.push("/feed");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (hideEmail === false) {
      await api
        .post(`user/logInWithEmail`, {
          email: logindata.email,
          password: logindata.password,
        })
        .then((res) => {
          console.log("loginWithemail", res);
          cookies.set("access_token", res?.data?.data?.token);
          console.log(cookies.set("access_token", res?.data?.data?.token));
          console.log("get", cookies.get("access_token"));
          dispatch(setIsAuth(true));
          history.push("/feed");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="mainCon ">
      <div className="navbar  mb-2">
        <Navbar />
      </div>
      <p className="font-bold text-2xl lg:text-3xl mb-8">
        Login as an Individual
      </p>
      <div className={`flex flex-col lg:flex-row ${classes.mainCon}`}>
        <div className={`h-max f-full lg:w-1/2   ${classes.imgcon}`}>
          <img
            src={individualLo}
            alt="signup"
            className={`w-80 md:mt-10 lg:mt-14 lg:ml-44 ${classes.img}`}
          />
        </div>
        <div className={`w-full lg:pl-0 lg:w-1/2 mt-5 ${classes.form}`}>
          {hideEmail === false ? (
            <>
              <div className="email text-left mt-4">
                <label className="form-label text-sm font-bold pl-2">
                  E-mail Id
                </label>
                <br />
                <input
                  className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
                  type="email"
                  name="email"
                  value={email.email}
                  onChange={emailInputData}
                  placeholder="email@gmail.com"
                  required
                />
                {email.email.length > 0 ? (
                  <button
                    onClick={displayEmailCode}
                    style={{ backgroundColor: ebtnColor }}
                    className="h-8 w-16 z-10 right-20 relative bg-green-400 rounded-xl text-sm text-white "
                    type=""
                  >
                    OTP
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            ""
          )}

          {hidePhone === false ? (
            <>
              <div className="phone text-left">
                <label className="form-label text-sm font-bold pl-2">
                  Phone number
                </label>
                <br />
                <input
                  className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
                  type="tel"
                  name="phone"
                  value={phone.phone}
                  onChange={phoneInputData}
                  maxLength="10"
                  placeholder="Enter your  registered phone number"
                  required
                />
                {phone.phone.length > 0 ? (
                  <button
                    onClick={displayPhoneCode}
                    style={{ backgroundColor: pbtnColor }}
                    className="h-8 w-16 z-10 right-20 relative bg-green-400 rounded-xl text-sm text-white "
                    type=""
                  >
                    OTP
                  </button>
                ) : (
                  ""
                )}

                <p className="text-sm text-red-500 pl-2 pt-1">
                  Please enter your registered phone number to get OTP
                </p>
              </div>
            </>
          ) : (
            ""
          )}

          {showResults ? (
            <>
              <p className=" text-base font-bold grid justify-start pl-10 lg:pl-36 ">
                Or, Log in through OTP
              </p>
              <div className="otp text-left">
                <label className="form-label text-sm font-bold pl-2">OTP</label>
                <br />
                <input
                  className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
                  type="text"
                  name="otpValue"
                  value={otpValue.otpValue}
                  onChange={otpInputData}
                  placeholder="Please enter OTP sent to your phone"
                  required
                />
                {otpVerify === "verify" ? (
                  <button
                    className="h-8 w-16 z-10  right-20 relative bg-green-400 rounded-xl text-sm text-white"
                    onClick={() => otpVerifyHandler("verify")}
                    type=""
                  >
                    verify
                  </button>
                ) : null}
                {otpVerify === "otpLoading" ? (
                  <button
                    className="h-8 w-16 z-10 top-1 right-20 relative bg-green-400 rounded-xl text-sm text-white"
                    onClick={() => otpVerifyHandler("otpLoading")}
                    type=""
                  >
                    {" "}
                    <img
                      src={processing}
                      alt="signup"
                      className={`w-5 h-5 ml-5 ${classes.imgpr}`}
                    />
                  </button>
                ) : null}
                {otpVerify === "otpDone" ? (
                  <button
                    className="h-8 w-16 z-10  right-20 relative bg-green-400 rounded-xl text-sm text-white "
                    onClick={() => otpVerifyHandler("otpDone")}
                    type=""
                  >
                    <CheckIcon />
                  </button>
                ) : null}
                <p className="text-sm text-red-500 pl-2 pt-1">
                  Check your registered E-mail Address or Phone Number for OTP
                </p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="password text-left mt-4">
                <label className="form-label text-sm font-bold pl-2">
                  Password
                </label>
                <br />
                <input
                  className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
                  type="password"
                  name="password"
                  value={password.password}
                  onChange={passwordInputData}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <p className=" text-sm font-bold pl-16 md:pl-52 lg:pl-32 xl:pl-72 pt-1">
                <i>Forgot Password?</i>
              </p>
            </>
          )}

          <div className="btns text-left mt-6 flex flex-row">
            <Link to="/">
              <p className=" h-15 w-36 px-8 py-2.5 bg-gray-500 rounded-md text-sm text-white font-bold">
                {" "}
                <ArrowBackIcon /> Back{" "}
              </p>
            </Link>
            <Link to="/feed">
              <p
                className="h-15 w-36 px-9 mb-2 py-2.5 ml-4 md:ml-60 lg:ml-4 xl:ml-72 bg-green-400 rounded-md text-sm text-white font-bold"
                onClick={handleLogin}
              >
                Login <ArrowForwardIcon />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualLogin;
