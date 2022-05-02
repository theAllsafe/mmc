import React from "react";
import share from "../res/share.svg";
import { makeStyles } from "@material-ui/core/styles";

import masjidicon from "../res/masjidicon.svg";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Testimg from "./Testimg";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },
  texta: {
    background: "#202836",
    paddding: "10px",
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
}));

const Picture = () => {
  const classes = useStyles();
  // const [imgArray, setImgArray] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   // console.log("hello");
  //   imgArray?.map((x, y) => {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(x.originFileObj);
  //     reader.onload = () => {
  //       // resolve(reader.result);
  //       // console.log(reader.result);
  //     };
  //   });
  // }, [imgArray]);

  return (
    <>
      {/* post create with privew */}
      <div className="flex flex-row pl-3">
        <div className="pl-3">
          <textarea
            className={classes.texta}
            rows="5"
            cols="26"
            placeholder="Write something..."
            name="description"
          ></textarea>
        </div>
      </div>
      <div className="mb-5 pl-5">
        <div>
          <Testimg />
        </div>
      </div>
      {/* post create button api call */}
      <div className="lg:w-3/5 w-11/12 flex flex-row">
        <div className="h-10 w-44 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
          <span>
            <img src={share} alt="share" />
          </span>
          <p className="text-sm md:text-base">Sharing option</p>
          <span>
            <KeyboardArrowDownIcon
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    // bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <div className="bg-slate-400 text-slate-800 ">
                <MenuItem>
                  <LanguageIcon /> Profile
                </MenuItem>
                <MenuItem>
                  <PeopleOutlineIcon /> Friends
                </MenuItem>
                <MenuItem>
                  <img src={masjidicon} alt="masjid" /> Musjid
                </MenuItem>
              </div>
            </Menu>
          </span>
        </div>
        <div className=" ml-3 flex flex-row items-center justify-evenly text-slate-400">
          <span>
            <Button
              variant="Post"
              //   onClick={handleSubmit}
              style={{
                background: "#9f56e3",
                borderRadius: "20px",
                padding: "8px 30px",
                color: "aliceblue",
              }}
            >
              Post
            </Button>
            {/* <SendIcon /> */}
          </span>
        </div>
      </div>
    </>
  );
};

export default Picture;
