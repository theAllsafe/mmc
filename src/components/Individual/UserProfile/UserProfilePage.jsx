import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import profilebg from "./res/profilebg.svg";
import FeedNav from "../../Feed/FeedNav";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import AddIcon from "@mui/icons-material/Add";
import { api } from "../../../helper/instance";
import { useDispatch } from "react-redux";
import { SHOW_TOAST } from "../../../store/constant/types";
import FontLoader from "./FontLoader";
import UserPost from "./posts/UserPost";
import Wallet from "./Wallet";
import UserInfo from "./UserInfo";
import Photos from "./Photos";
import Friends from "./Friends";
import Tabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  profilebg: {
    margin: "0 auto",
    width: "97.5%",
    height: "488px",
    backgroundImage: `url(${profilebg})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "63% 1%",
    borderRadius: "3%",
    [theme.breakpoints.down(1024)]: {
      height: "400px",
    },
    [theme.breakpoints.down(1000)]: {
      height: "400px",
    },
    [theme.breakpoints.down(930)]: {
      height: "400px",
    },
    [theme.breakpoints.down(768)]: {
      height: "300px",
    },
    [theme.breakpoints.down(650)]: {
      height: "200px",
    },
    [theme.breakpoints.down(425)]: {
      height: "200px",
    },
    [theme.breakpoints.down(375)]: {
      height: "200px",
    },
  },
  camera: {
    position: "absolute",
    left: "6%",
    top: "16%",
    [theme.breakpoints.between(320, 700)]: {
      top: "5%",
    },
    [theme.breakpoints.between(700, 768)]: {
      left: "12%",
      top: "5%",
    },
    [theme.breakpoints.between(768, 1280)]: {
      left: "14%",
    },
    [theme.breakpoints.between(1280, 1441)]: {
      left: "9%",
    },
  },
  qrcode: {
    background: "#202836",
    position: "absolute",
    left: "92%",
    top: "16%",
    [theme.breakpoints.down(768)]: {
      left: "84%",
      top: "5%",
    },
    [theme.breakpoints.down(425)]: {
      left: "85%",
      top: "5%",
    },
    [theme.breakpoints.down(375)]: {
      left: "82%",
      top: "5%",
    },
    [theme.breakpoints.between(768, 1280)]: {
      left: "82%",
    },
    [theme.breakpoints.between(1280, 1441)]: {
      left: "87%",
    },
  },
  Addicon: {
    position: "absolute",
    left: "54%",
    top: "63%",

    [theme.breakpoints.down(1280)]: {
      top: "54%",
    },
    [theme.breakpoints.down(768)]: {
      top: "53%",
      left: "55%",
    },
    [theme.breakpoints.down(500)]: {
      top: "49%",
    },
    [theme.breakpoints.down(425)]: {
      top: "46%",
    },
    [theme.breakpoints.down(375)]: {
      top: "40%",
    },
  },
  profilepicContainer: {
    position: "absolute",
    left: "0%",
    top: "67%",
    [theme.breakpoints.down(2561)]: {
      top: "77%",
    },
    [theme.breakpoints.down(1280)]: {
      top: "82%",
    },
    [theme.breakpoints.down(1024)]: {
      top: "84%",
    },
    [theme.breakpoints.down(1000)]: {
      top: "84%",
    },
    [theme.breakpoints.down(930)]: {
      top: "84%",
    },
    [theme.breakpoints.down(768)]: {
      top: "83%",
    },
    [theme.breakpoints.down(650)]: {
      top: "81%",
    },
    [theme.breakpoints.down(425)]: {
      top: "83%",
    },
    [theme.breakpoints.down(375)]: {
      top: "87%",
    },
  },
}));

const UserProfilePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  useEffect(() => {
    const getuserById = async () => {
      await api
        .get("user")
        .then((res) => {
          const data = res.data.data[0];
          console.log(data);
          setUser(data);
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: SHOW_TOAST, payload: error.message });
        });
    };
    getuserById();
  }, []);

  console.log("user", user);
  return (
    <div>
      <FontLoader />
      <FeedNav />
      <div className={`w-100 ${classes.maincont}`}>
        {user && (
          <>
            <div className="container mx-auto pt-3">
              <div className={classes.profilebg}>
                <div className={classes.camera}>
                  <CameraAltIcon style={{ color: "white" }} />
                </div>
                <div
                  className={`h-10 w-10 flex justify-center items-center ${classes.qrcode}`}
                >
                  <QrCode2Icon style={{ color: "white" }} />
                </div>

                {/* profile icon and name */}
                <div
                  className={`flex flex-col items-center justify-center w-full ${classes.profilepicContainer}`}
                >
                  <img
                    src={user.image}
                    alt="profilepic"
                    className={`relative w-1/6 border-0 rounded-full ${classes.profilepic}`}
                  />
                  <div
                    className={`h-4 w-4 md:h-8 md:w-8 lg:h-10 lg:w-10 bg-blue-400 rounded-full items-center flex justify-center absolute ${classes.Addicon}`}
                  >
                    <AddIcon
                      style={{ color: "white" }}
                      className={classes.lcsicons}
                    />
                  </div>
                  <p className="text-sm lg:text-xl text-white font-bold">
                    {user.fName + "" + user.lName}
                  </p>
                  <p className="text-xs lg:text-sm text-white">
                    UI/UX Designer
                  </p>
                </div>
              </div>
              {/* tabs  */}
              <Tabs />
              <div className="grid lg:grid-cols-12 grid-cols-1 gap-3 mt-12 md:mt-32">
                <div className="lg:col-span-4">
                  {/* wallet part */}
                  <Wallet />
                  {/* basic info part */}
                  <UserInfo />
                  {/* photos */}
                  <Photos />
                  {/* friends list */}
                  <Friends />
                </div>
                {/* postList */}
                <UserPost post={user} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
