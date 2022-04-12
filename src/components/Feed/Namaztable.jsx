import React from "react";
import img1 from "./res/1.svg";
import img2 from "./res/2.svg";
import img3 from "./res/3.svg";
import img4 from "./res/4.svg";
import img5 from "./res/5.svg";
import Security from "./res/Security.svg";
import Edit from "./res/Edit.svg";
import timetablebg from "./res/timetablebg.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  timetable: {
    backgroundImage: `url("${timetablebg}") ,linear-gradient(164.08deg, #5596E6 3.65%, #0072FF 84.55%) `,
    borderRadius: "35px",
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "auto",
    },
    [theme.breakpoints.between(768, 1024)]: {
      backgroundPosition: "4% 40%",
      backgroundAttachment: "initial",
    },
  },
  img5: {
    marginTop: "13px",
  },
  badge: {
    marginTop: "23px",
  },
}));

const Namaztable = () => {
  const classes = useStyles();
  return (
    <>
      <div className={` ${classes.timetable}`}>
        <p className="lg:text-xl py-3">Namaz time table</p>
        <p className="border-t border-white"></p>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-14 col-span-2 mx-auto flex items-center">
            <img src={img1} alt="img1" className="w-12 lg:w-16 h-auto" />
          </div>
          <div className="h-14 col-span-3 text-left">
            <p className="text-xs pt-3">Fajr</p>
            <p className="text-lg text-bolder">05 : 21 am</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-14 col-span-2 mx-auto flex items-center">
            <img src={img2} alt="img2" className="w-12 lg:w-16 h-auto" />
          </div>
          <div className="h-14 col-span-3 text-left">
            <p className="text-xs pt-3">Zohar</p>
            <p className="text-lg text-bolder">12 : 32 pm</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-14 col-span-2 mx-auto flex items-center">
            <img src={img3} alt="img3" className="w-12 lg:w-16 h-auto" />
          </div>
          <div className="h-14 col-span-2 text-left">
            <p className="text-xs pt-3">Asr</p>
            <p className="text-lg text-bolder">04 : 45 pm</p>
          </div>
          <div className="h-14">
            <img className={classes.badge} src={Security} alt="Security" />
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-14 col-span-2 mx-auto flex items-center">
            <img src={img4} alt="img4" className="w-12 lg:w-16 h-auto" />
          </div>
          <div className="h-14 col-span-3 text-left">
            <p className="text-xs pt-3">Manghrib</p>
            <p className="text-lg text-bolder">06 : 25 pm</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-16 col-span-2 mx-auto">
            <img
              src={img5}
              alt="img5"
              className={`w-8  h-auto ${classes.img5}`}
            />
          </div>
          <div className="h-16 col-span-3 text-left">
            <p className="text-xs pt-3">Isha</p>
            <p className="text-lg text-bolder">07 : 39 pm</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-16 col-span-2 mx-auto"></div>
          <div className="h-16 col-span-2 text-left">
            <p className="text-xs pt-2">Juma</p>
            <p className="text-lg text-bolder">01 : 00 pm</p>
          </div>
          <div className="h-14">
            <img className={classes.badge} src={Edit} alt="Edit" />
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-16 col-span-2 mx-auto"></div>
          <div className="h-16 col-span-3 text-left">
            <p className="text-xs pt-2">Khatm Sehar</p>
            <p className="text-lg text-bolder">05 : 00 pm</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-16 col-span-2 mx-auto"></div>
          <div className="h-16 col-span-3 text-left">
            <p className="text-xs pt-2">Tulu Aftab</p>
            <p className="text-lg text-bolder">06 : 00 pm</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mx-auto w-75">
          <div className="h-16 col-span-2 mx-auto"></div>
          <div className="h-16 col-span-3 text-left">
            <p className="text-xs pt-2">Ghurub Aftab</p>
            <p className="text-lg text-bolder">06 : 10 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Namaztable;
