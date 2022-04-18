import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const useStyles = makeStyles((theme) => ({
  basicinfo: {
    background: "#202836",
    borderRadius: "35px",
    color: "white",
    paddingBottom: "0px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={`mt-3 mx-auto ${classes.basicinfo}`}>
          <div className="grid grid-cols-6">
            <div className="col-span-1 py-3"></div>
            <div className="col-span-4">
              <p className="text-xl py-3 text-left font-bold">Basic Infos</p>
            </div>
            <div className="col-span-1 py-3">
              <MoreVertIcon />
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400 "></p>
            <div className="grid grid-cols-6 h-16">
              <div className="col-span-1 py-3"></div>
              <div className="col-span-5 py-3">
                <p className="text-lg text-left font-bold">Studied at</p>
                <p className="text-left text-xs">
                  Jamia millia islamia University
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400"></p>
            <div className="grid grid-cols-6 h-16">
              <div className="col-span-1 py-3"></div>
              <div className="col-span-5 py-3">
                <p className="text-lg text-left font-bold">From</p>
                <p className="text-left text-xs">Patna, Bihar</p>
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400"></p>
            <div className="grid grid-cols-6 h-16">
              <div className="col-span-1 py-3"></div>
              <div className="col-span-5 py-3">
                <p className="text-lg text-left font-bold">Lives in</p>
                <p className="text-left text-xs">Delhi</p>
              </div>
            </div>
          </div>
          <div>
            <p className="border-t border-slate-400"></p>
            <div className="grid grid-cols-6 h-16">
              <div className="col-span-1 py-3"></div>
              <div className="col-span-5 py-3">
                <p className="text-lg text-left font-bold">Followers</p>
                <p className="text-left text-xs">196 followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
