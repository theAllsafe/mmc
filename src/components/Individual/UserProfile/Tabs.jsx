import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuitems: {
    width: "97%",
    margin: "1% auto",
  },
}));
const Tabs = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={`mt-3 flex flex-row justify-between ${classes.menuitems}`}
      >
        <div className="flex flex-row ">
          <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl">
            <p className="text-xs lg:text-base text-white font-bold px-1.5  py-1.5">
              Timeline
            </p>
          </div>
          <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-1 lg:ml-4">
            <p className="text-xs lg:text-base text-white font-bold px-1.5  py-1.5">
              About
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl">
            <p className="text-xs lg:text-base text-white font-bold px-1.5  py-1.5">
              Friends
            </p>
          </div>
          <div className="lg:h-12 lg:w-44 flex justify-center items-center bg-slate-800 rounded-xl ml-1 lg:ml-4">
            <p className="text-xs lg:text-base text-white font-bold px-1.5  py-1.5">
              Photos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
