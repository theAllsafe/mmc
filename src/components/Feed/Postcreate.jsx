import React, { useState, useEffect } from "react";
import profileicon from "./res/profile.svg";
import share from "./res/share.svg";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../helper/instance";
import SendIcon from "@mui/icons-material/Send";

import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
};

const Postcreate = () => {
  const classes = useStyles();

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

  const handleSubmit = async (e) => {
    console.log(body);

    await api
      .post(`post/create`, body)
      .then((res) => {
        console.log("post is ", res);

        setPost({
          image: "",
          description: "",
        });
        setImage("");
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
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className=" ml-3 flex flex-row items-center justify-evenly text-slate-400">
          <span>
            <SendIcon onClick={handleSubmit} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Postcreate;
