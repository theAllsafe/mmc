import React from "react";
import photo from "./res/photo.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profilephotos: {
    background: "#202836",
    borderRadius: "20px",
    color: "white",
    paddingBottom: "0px",
    [theme.breakpoints.between(320, 1024)]: {
      width: "95%",
      margin: "4% auto",
    },
  },
  profilephoto: {
    borderRadius: "17%",
  },
}));

const Photos = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={`my-3 mx-auto ${classes.profilephotos}`}>
          <div className="grid grid-cols-6">
            <div className="col-span-1 py-3"></div>
            <div className="col-span-4">
              <p className="text-xl py-3 text-left font-bold">Photos</p>
            </div>
            <div className="col-span-1 py-3">
              <MoreVertIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-evenly items-center">
            <img
              src={photo}
              alt="profilephotos"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
          </div>
          <div className="flex flex-row justify-evenly items-center my-3">
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
          </div>
          <div className="flex flex-row justify-evenly items-center my-3">
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="photo"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
            <img
              src={photo}
              alt="profilephoto"
              className={`h-20 w-20 md:h-32 md:w-32 lg:w-24 lg:h-24 xl:h-28 xl:w-28 ${classes.profilephoto}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
