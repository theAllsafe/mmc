import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import zakat from "./res/zakat.svg";
import earnings from "./res/earnings.svg";
import mycoin from "./res/mycoin.svg";
import sadqa from "./res/sadqa.svg";
import rechargewallet from "./res/rechargewallet.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles((theme) => ({
  wallet: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    marginBottom: "15px",
    [theme.breakpoints.down(1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  notification: {
    position: "relative",
    "&::after": {
      content: '" "',
      display: "block",
      height: 60,
      backgroundColor: "red",
      width: "8px",
      height: "8px",
      borderRadius: "50px",
      position: "absolute",
      top: 0,
      left: "70%",
      [theme.breakpoints.between(320, 426)]: {
        width: "6px",
        height: "6px",
      },
      [theme.breakpoints.between(550, 1024)]: {
        width: "6px",
        height: "6px",
      },
    },
  },
}));

const Wallet = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.wallet}`}>
        <div className="grid grid-cols-8 h-9">
          <div className="col-span-1 py-3 flex justify-center"></div>
          <div className="col-span-4 flex items-center">
            <p className="text-xl py-3 text-left font-bold">My Wallet </p>
            <div className="text-green-500 pl-2">
              <CheckCircleIcon />
            </div>
          </div>
          <div className="col-span-1 py-3">
            <ShareIcon />
          </div>
          <div className="col-span-1 py-3">
            <div className={classes.notification}>
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div className="h-24">
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-5 gap-2 w-11/12 mx-auto">
            <div className="flex flex-col justify-center items-center">
              <img src={mycoin} alt="mycoin" />
              <p className="text-xs md:text-sm">My Coins</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={earnings} alt="mycoin" />
              <p className="text-xs md:text-sm">Earnings</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={sadqa} alt="mycoin" />
              <p className="text-xs md:text-sm">Sadqa</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={zakat} alt="mycoin" />
              <p className="text-xs md:text-sm">Zakat</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={rechargewallet} alt="mycoin" />
              <p className="text-xs md:text-sm">Recharge Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
