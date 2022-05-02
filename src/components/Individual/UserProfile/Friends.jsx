import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import star from "./res/star.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import friend1 from "./res/friend1.svg";
import friend2 from "./res/friend2.svg";

const useStyles = makeStyles((theme) => ({
  photos: {
    background: "#202836",
    borderRadius: "20px",
    color: "white",
    paddingBottom: "0px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  friends: {
    background: "#202836",
    borderRadius: "30px",
    color: "white",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));
const Friends = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={`my-3 mx-auto ${classes.photos}`}>
          <div className="grid grid-cols-6">
            <div className="col-span-1 py-3"></div>
            <div className="col-span-4">
              <p className="text-xl py-3 text-left font-bold">Friends</p>
            </div>
            <div className="col-span-1 py-3">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className={`my-3 mx-auto ${classes.friends}`}>
          <div>
            <div className="grid grid-cols-6 mx-auto w-75 pt-2">
              <div className="h-16 col-span-2 mx-auto flex items-center">
                <img
                  src={friend1}
                  alt="friend1"
                  className="h-12 w-12 border border-green-400 rounded-full"
                />
              </div>
              <div className="h-16 col-span-3 text-left">
                <p className="text-lg font-bold">Alishba</p>
                <p className="text-sm ">4 mins ago</p>
              </div>
              <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                <img src={star} alt="start" />
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400 my-2"></p>
            <div className="grid grid-cols-6 mx-auto w-75">
              <div className="h-14 col-span-2 mx-auto flex items-center">
                <img
                  src={friend2}
                  alt="friend2"
                  className="h-12 w-12 border border-green-400 rounded-full"
                />
              </div>
              <div className="h-16 col-span-3 text-left">
                <p className="text-lg font-bold">Anas</p>
                <p className="text-sm">1 day ago</p>
              </div>
              <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                <img src={star} alt="start" />
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400 my-2"></p>
            <div className="grid grid-cols-6 mx-auto w-75">
              <div className="h-14 col-span-2 mx-auto flex items-center">
                <img
                  src={friend2}
                  alt="friend2"
                  className="h-12 w-12 border border-green-400 rounded-full"
                />
              </div>
              <div className="h-16 col-span-3 text-left">
                <p className="text-lg font-bold">Mohammad</p>
                <p className="text-sm">a month ago</p>
              </div>
              <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                <img src={star} alt="start" />
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400 my-2"></p>
            <div className="grid grid-cols-6 mx-auto w-75">
              <div className="h-14 col-span-2 mx-auto flex items-center">
                <img
                  src={friend2}
                  alt="friend2"
                  className="h-12 w-12 border border-green-400 rounded-full"
                />
              </div>
              <div className="h-16 col-span-3 text-left mb-3">
                <p className="text-lg font-bold">Ahmad</p>
                <p className="text-sm">Online</p>
              </div>
              <div className="h-16 col-span-1 mx-auto flex flex-col justify-center">
                <img src={star} alt="start" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
