import React, { useState, useEffect } from "react";
import profileicon from "../res/profile.svg";
import share from "../res/share.svg";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../helper/instance";
import masjidicon from "../res/masjidicon.svg";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { getPostList } from "../../../store/actions/PostAction";

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

const Postcreate = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const history = useHistory();
  const [post, setPost] = useState({
    image: "",
    description: "",
  });

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const imageUploader = React.useRef(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreview(reader.result);
        setPost({ ...post, image: reader.result });
      };
    } else {
      setPreview(null);
    }
  }, [image]);

  const inputPostData = (e) => {
    const { value, name } = e.target;

    setPost((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const body = {
    ...post,
  };

  const handleSubmit = () => {
    console.log(body);

    api
      .post(`post/create`, body)
      .then((res) => {
        console.log("post is ", res);
        // history.push("/postlist.jsx", res);
        setPost({
          image: "",
          description: "",
        });
        setImage("");
        dispatch(getPostList());
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* post create with privew */}
      <div className="flex flex-row pl-3">
        <div className="flex justify-center">
          <img
            src={profileicon}
            alt="profile"
            className={`h-12 w-12 xl:mx-6 border-0 rounded-full ${classes.profileicon}`}
          />
        </div>
        <div className="pl-3">
          <textarea
            className={classes.texta}
            rows="5"
            cols="26"
            placeholder="Write something..."
            name="description"
            value={post.description}
            onChange={inputPostData}
          ></textarea>
        </div>
      </div>
      <div className="mb-5 pl-5">
        {preview ? (
          <img
            src={preview}
            style={{ objectFit: "cover", width: "20%" }}
            onClick={() => {
              setImage(null);
            }}
            alt="profileimg"
          />
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
            ref={imageUploader}
            style={{
              display: "none",
            }}
          />
        )}
      </div>
      {/* post create button api call */}
      <div className="lg:w-3/5 w-11/12 flex flex-row">
        <div className="h-10 w-28 bg-slate-400 text-slate-800 rounded-3xl ml-3 flex flex-row items-center justify-evenly">
          <span
            className="flex"
            onClick={(event) => {
              event.preventDefault();
              imageUploader.current.click();
            }}
          >
            <PhotoCameraOutlinedIcon
              onClick={(event) => {
                event.preventDefault();
                imageUploader.current.click();
              }}
            />
            <p className="text-sm md:text-base">Media</p>
          </span>
        </div>
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
              onClick={handleSubmit}
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

export default Postcreate;
