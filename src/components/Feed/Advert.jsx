import React from "react";
import advert from "./res/advert.svg";
import advertimg from "./res/advertimg.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  advert: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    marginBottom: "15px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));

const Advert = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.advert}`}>
        <div className="grid grid-cols-8">
          <div className="col-span-2 py-3 flex justify-center">
            <img src={advert} alt="advert" />
          </div>
          <div className="col-span-4 ">
            <p className="text-xl py-3 text-center">Advert</p>
          </div>
          <div className="col-span-2 py-3">
            <MoreVertIcon />
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-8 mx-auto">
            <div className=" col-span-3 mx-auto items-center">
              <p
                className="text-xl text-red-400 font-thin"
                style={{
                  fontFamily: "'Waiting for the Sunrise', cursive",
                }}
              >
                Flash Sale
              </p>
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                THE HEKIM
              </p>
              <p className="pt-6 lg:pt-1" style={{ fontSize: "12px" }}>
                Get 20
              </p>
              <p className="" style={{ fontSize: "12px" }}>
                Discount with
              </p>
              <p className="" style={{ fontSize: "12px" }}>
                Coupon Code.
              </p>
            </div>
            <div className=" col-span-5 flex justify-center">
              <img src={advertimg} alt="advertimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advert;
