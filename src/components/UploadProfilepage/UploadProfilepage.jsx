import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Steppers from "../Stepper/Stepper";
import Signup from "./res/Signup.png";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useParams, useHistory } from "react-router-dom";
import { api } from "../../helper/instance";

const useStyles = makeStyles((theme) => ({
  mainCon: {
    height: "67vh",
  },
  img: {
    height: "360px",
    marginTop: "7%",
  },

  uploadpic: {
    [theme.breakpoints.down(426)]: {
      paddingLeft: "14%",
    },
    [theme.breakpoints.down(376)]: {
      paddingLeft: "4%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      paddingLeft: "24%",
      marginTop: "5%",
    },
  },
  imgcon: {
    [theme.breakpoints.between(319, 768)]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.between(768, 1280)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  bo: {
    [theme.breakpoints.down(768)]: {
      height: "200px",
      width: "84%",
    },
    [theme.breakpoints.down(376)]: {
      height: "170px",
      width: "84%",
    },
    [theme.breakpoints.down(319)]: {
      marginLeft: "0px",
      height: "330px",
    },
  },
}));

const UploadProfilePage = () => {
  const classes = useStyles();
  const params = useParams();
  const history = useHistory();
  const [img, setImg] = useState({
    image: "",
    id: parseInt(params.id),
  });
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  // const fileInputRef = useRef();
  // const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const body = {
    ...img,
  };

  // const handleImageUpload = (e) => {
  //   let { files } = e.target;

  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = () => {
  //     //   console.log(reader.result);
  //     setImg({ ...img, image: reader.result });
  //   };
  // };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreview(reader.result);
        setImg({ ...img, image: reader.result });
      };
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    localStorage.setItem("setpperId", 3);
  }, []);

  const handleSubmit = async () => {
    console.log(body);

    await api
      .post(`user/image`, body)
      .then((res) => {
        console.log("img is ", res.data);
        history.push("/Password/" + res.data.user.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mainCon ">
      <div className="navbar  mb-2">
        <Navbar />
      </div>
      <p className="font-bold text-2xl lg:text-3xl mb-8">
        Tell us a bit about your nearest masjid.
      </p>
      <div className="stepper">
        <Steppers />
      </div>
      <div className={`flex flex-col lg:flex-row ${classes.mainCon}`}>
        <div className={`h-max f-full lg:w-1/2 ${classes.imgcon}`}>
          <img
            src={Signup}
            alt="signup"
            className={`w-80 md:mt-10 lg:mt-14 xl:ml-44 ${classes.img}`}
          />
        </div>
        <div className={`w-full lg:pl-0 lg:w-1/2  mt-5 ${classes.uploadpic}`}>
          <div className="uploadimg text-left">
            <p className="mb-2 pl-2">Upload a profile picture</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  style={{ objectFit: "cover" }}
                  onClick={() => {
                    setImage(null);
                  }}
                  alt="profileimg"
                />
              ) : (
                <div
                  className={`lg:h-56 md:w-96 lg:w-96 border border-black rounded-xl grid justify-center items-center ${classes.bo}`}
                  onClick={(event) => {
                    event.preventDefault();
                    imageUploader.current.click();
                  }}
                >
                  <div className="icon h-6 w-6 pt-20 pl-24">
                    <AddCircleIcon
                      onClick={(event) => {
                        event.preventDefault();
                        imageUploader.current.click();
                      }}
                    />
                  </div>
                  <p className="pt-24">*Uplaod images less than 3 Mb</p>
                </div>
              )}
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
                // value={img.image}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
            </div>
          </div>
          <div className="btns mt-10  mb-3 lg:mb-0 flex flex-row">
            <Link to="/OtherDetails">
              <p className=" h-15 w-36 px-8 py-2.5 bg-gray-500 rounded-md text-sm text-white font-bold">
                {" "}
                <ArrowBackIcon /> Back{" "}
              </p>
            </Link>
            <Link to="/Password">
              <p
                className=" h-15 w-36 px-10 py-2.5 ml-4 md:ml-24 bg-green-400 rounded-md text-sm text-white font-bold"
                onClick={handleSubmit}
              >
                Next <ArrowForwardIcon />{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProfilePage;
