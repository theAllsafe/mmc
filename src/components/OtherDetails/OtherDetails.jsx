import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Steppers from "../Stepper/Stepper";
import Signup from "./res/Signup.png";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../helper/instance";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
      paddingLeft: "12%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "3%",
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

const OtherDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const [other, setOther] = useState({
    musjidName: "",
    musjidAddress: "",
    mutawalli: "",
    mutawalliPhone: "",
    id: parseInt(params.id),
  });

  useEffect(() => {
    localStorage.setItem("setpperId", 2);
  }, []);
  const inputData = (e) => {
    const { value, name } = e.target;

    setOther((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const body = {
    ...other,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(body);

    await api
      .post(`user/musjid`, body)
      .then((res) => {
        console.log("otherdetails", res.data);
        history.push("/UploadProfilePage/" + res.data.user.id);
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
      <div className={`flex flex-col lg:flex-row ${classes.mainCon}`}>
        <div className={`h-max f-full lg:w-1/2   ${classes.imgcon}`}>
          <img
            src={Signup}
            alt="signup"
            className={`w-80 md:mt-10 lg:mt-14 xl:ml-44 ${classes.img}`}
          />
        </div>
        <div className={`w-full lg:pl-0 lg:w-1/2 mt-5 ${classes.form}`}>
          <div className="email text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Your nearest Masjid
            </label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="text"
              name="musjidName"
              value={other.musjidName}
              onChange={inputData}
              placeholder="Name of the masjid where you visit often"
              required
            />
          </div>
          <div className="email text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">Address</label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="text"
              name="musjidAddress"
              value={other.musjidAddress}
              onChange={inputData}
              placeholder="Address of the Masjid"
              required
            />
          </div>
          <div className="email text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Mutawalli
            </label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="text"
              name="mutawalli"
              value={other.mutawalli}
              onChange={inputData}
              placeholder="Name of the Mutawalli"
              required
            />
          </div>
          <div className="phone number text-left mt-7">
            <label className="form-label text-sm font-bold pl-2">
              Telephone number of Mutawalli
            </label>
            <br />
            <input
              className="h-12 w-4/5  text-sm border border-black rounded-xl px-5 mt-2"
              type="tel"
              name="mutawalliPhone"
              value={other.mutawalliPhone}
              onChange={inputData}
              placeholder="Phone number of the Mutawalli"
              minLength="10"
              maxLength="10"
              required
            />
            <div className="btns mt-10 mb-3 lg:mb-0 flex flex-row">
              <Link to="/BasicDetails">
                <p className=" h-15 w-36 px-8 py-2.5 bg-gray-500 rounded-md text-sm text-white font-bold">
                  {" "}
                  <ArrowBackIcon /> Back{" "}
                </p>
              </Link>
              <Link to="/UploadProfilePage">
                <p
                  className=" h-15 w-36 px-10 py-2.5 ml-4 md:ml-60 lg:ml-30 lg:ml-32 xl:ml-72 lg:mb-8 bg-green-400 rounded-md text-sm text-white font-bold"
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

export default OtherDetails;
