import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import gulamicon from "./res/gulamicon.svg";
import veracc from "./res/veracc.svg";
import validation from "./res/validation.svg";
import donate from "./res/donate.svg";
import spread from "./res/spread.svg";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  verify2: {
    position: "relative",
    left: "65%",
    bottom: "45%",
  },
  help: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "12px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));

const Help = () => {
  const classes = useStyles();
  return (
    <>
      <div className={`mt-3 mx-auto ${classes.help}`}>
        <div className="grid grid-cols-6">
          <div className="col-span-5 ">
            <p className="text-xl py-3 text-center">Help a Needy!</p>
          </div>
          <div className="col-span-1 py-3">
            <MoreVertIcon />
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={gulamicon}
                alt="gulamicon"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
              <p className="text-lg text-bolder">Ghulam Ali</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <img src={validation} alt="validation" />
                  <p style={{ fontSize: "12px" }}>Validate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={donate} alt="donate" />
                  <p style={{ fontSize: "12px" }}>Donate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={spread} alt="spread" />
                  <p style={{ fontSize: "12px" }}>Spread</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={gulamicon}
                alt="gulamicon"
                className="h-12 w-12 border-0 rounded-full"
              />
              <img
                src={veracc}
                alt="verify"
                className={` ${classes.verify2}`}
              />
            </div>
            <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
              <p className="text-lg text-bolder">Ghulam Ali</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <img src={validation} alt="validation" />
                  <p style={{ fontSize: "12px" }}>Validate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={donate} alt="donate" />
                  <p style={{ fontSize: "12px" }}>Donate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={spread} alt="spread" />
                  <p style={{ fontSize: "12px" }}>Spread</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="border-t border-slate-400 my-2"></p>
          <div className="grid grid-cols-6 mx-auto w-75 ">
            <div className="h-14 col-span-2 mx-auto">
              <img
                src={gulamicon}
                alt="gulamicon"
                className="h-12 w-12 border-0 rounded-full"
              />
            </div>
            <div className="h-14 col-span-3 text-left mb-3 flex flex-col">
              <p className="text-lg text-bolder">Ghulam Ali</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <img src={validation} alt="validation" />
                  <p style={{ fontSize: "12px" }}>Validate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={donate} alt="donate" />
                  <p style={{ fontSize: "12px" }}>Donate</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={spread} alt="spread" />
                  <p style={{ fontSize: "12px" }}>Spread</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
