import React, { useEffect, useState } from "react";
import FeedNav from "../Feed/FeedNav";
import { makeStyles } from "@material-ui/core/styles";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import SecurityIcon from "@mui/icons-material/Security";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupportIcon from "@mui/icons-material/Support";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getuserById } from "../../store/actions/UserAction";

const useStyles = makeStyles((theme) => ({
  sidenavback: {
    background: "#202836",
    height: "120vh",
    width: "45vh",
    marginLeft: "6%",
    marginTop: "2%",
    [theme.breakpoints.down(1024)]: {
      //     background: "#202836",
      //    width: "100%",
      //    height: "max-content !important",
      left: "-100%",
      position: "absolute",
      //    transition: "0.5s",
      //    marginLeft: "0px",
    },
  },
  buttoncon: {
    display: "none",
    zIndex: "99",
    [theme.breakpoints.down(1024)]: {
      background: "#202836",
      border: "none",
      outline: "none",
      color: "white",
      borderRadius: "5px",
      fontSize: "20px",
      cursor: "pointer",
      height: "2rem",
      width: "2rem",
      marginTop: "4px",
      marginLeft: "4px",
      display: "block",
      textAlign: "center",
    },
  },
  sidenav: {
    background: "#202836",
    height: "120vh",
    width: "45vh",
    marginLeft: "6%",
    marginTop: "2%",
    [theme.breakpoints.down(1024)]: {
      background: "#202836",
      width: "100%",
      height: "max-content !important",
      // left: "0 !important",
      position: "absolute",
      transition: "0.5s",
      marginLeft: "0px",
    },
  },
  items: {
    [theme.breakpoints.down(1024)]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      itemsAlign: "center",
    },
  },
}));

export default function SideNav() {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  const toggleModal = () => setShow((show) => !show);
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getuserById());
  }, []);

  return (
    <div>
      <div>
        <FeedNav />
      </div>
      <div onClick={toggleModal} className={classes.buttoncon}>
        <MenuOutlinedIcon />
      </div>
      <div
        className={` flex flex-col gap-4 rounded-3xl float-left ${
          show === true ? classes.sidenav : classes.sidenavback
        }`}
      >
        {userList && (
          <>
            {" "}
            <div className="flex flex-col items-center mt-5 gap-3">
              <img
                src={userList.image}
                style={{
                  borderRadius: "100%",
                  height: "114px",
                  width: "114px",
                }}
                className="border-2"
                alt=""
              />
              <h1 className="text-white font-bold text-xl ">
                {userList.fName + "" + userList.lName}
              </h1>
              {/* <h4 className="text-white text-lg ">New Delhi, India</h4> */}
            </div>
          </>
        )}

        <div className={classes.items}>
          <hr className="mt-6" />
          <NavLink
            exact
            to="/setting"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-3 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <ManageAccountsIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">General</h1>
            </div>
          </NavLink>
          <NavLink
            exact
            to="/security"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <SecurityIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">Security</h1>
            </div>
          </NavLink>
          <NavLink
            exact
            to="/Profile"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <WarningAmberIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">Account</h1>
            </div>
          </NavLink>
          <hr />
          <NavLink
            exact
            to="/Privacy"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <LockIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">Privacy</h1>
            </div>
          </NavLink>
          <NavLink
            exact
            to="/Preferences"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <SettingsInputComponentIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">Preferences</h1>
            </div>
          </NavLink>
          <hr />
          <NavLink
            exact
            to="/Notifications"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <NotificationsIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">
                Notifications
              </h1>
            </div>
          </NavLink>
          <NavLink
            exact
            to="/Help"
            activeClassName="active-navLink"
            className="demo"
          >
            <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 p-2 w-5/12 md:w-1/3 lg:w-full m-auto lg:m-0 items-center">
              <SupportIcon className="iconallside" />{" "}
              <h1 className="text-white text-xl tracking-wider">Help</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
