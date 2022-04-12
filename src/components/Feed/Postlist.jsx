import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fillshare from "./res/fillshare.svg";
import more1 from "./res/more1.svg";
import more2 from "./res/more2.svg";
import more3 from "./res/more3.svg";
import more4 from "./res/more4.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { api } from "../../helper/instance";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";

// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../../store/actions/PostAction";
import moment from "moment";
// import { api } from "../../helper/instance";
import CommentandLike from "./CommentandLike";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  feedpost: {
    background: "#202836",
    borderRadius: "20px",
    color: "white",
    marginBottom: "14px",
    // height: "28%",
    [theme.breakpoints.between(320, 376)]: {
      width: "95%",
      margin: "4% auto",
      // height: "33%",
    },
    [theme.breakpoints.between(375, 426)]: {
      width: "95%",
      margin: "4% auto",
      // height: "34%",
    },
    [theme.breakpoints.between(426, 600)]: {
      width: "95%",
      margin: "4% auto",
      // height: "35%",
    },
    [theme.breakpoints.between(600, 768)]: {
      width: "95%",
      margin: "4% auto",
      // height: "37%",
    },
    [theme.breakpoints.between(768, 1024)]: {
      width: "95%",
      margin: "4% auto",
      // height: "37%",
    },
    [theme.breakpoints.between(1024, 1280)]: {
      width: "95%",
      margin: "4% auto",
      // height: "24%",
    },
    [theme.breakpoints.between(1536, 2561)]: {
      width: "100%",
      margin: "4% auto",
      // height: "32%",
    },
  },

  uploadcon: {
    height: "45vh",
    width: "90%",
    margin: "auto",
  },

  uploadpic: {
    borderRadius: "6%",
    maxHeight: "100%",
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    objectFit: "contain",
  },

  lcsicons: {
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.between(425, 768)]: {
      fontSize: "12px !important",
    },
  },
  lcsicons1: {
    [theme.breakpoints.between(320, 426)]: {
      width: "12px",
      height: "auto",
    },
    [theme.breakpoints.between(425, 600)]: {
      width: "12px",
      height: "auto",
    },
  },
  moreimg: {
    [theme.breakpoints.between(320, 376)]: {
      width: "25%",
    },
    [theme.breakpoints.between(375, 426)]: {
      width: "20%",
    },
    [theme.breakpoints.between(426, 600)]: {
      width: "18%",
    },
    [theme.breakpoints.between(600, 768)]: {
      width: "22%",
    },
  },
  more1: {
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more2: {
    position: "relative",
    right: "15%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more3: {
    position: "relative",
    right: "30%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  more4: {
    position: "relative",
    right: "46%",
    [theme.breakpoints.between(320, 600)]: {
      width: "24px",
      height: "24px",
    },
  },
  liked: {
    fontSize: "12px",
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "8px",
    },
  },
}));

const style = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "white",
  color: "black",
  border: "2px solid #FFF",
  boxShadow: 24,
  p: 2,
};

const Postlist = ({ postId }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [cmt, setCmt] = useState({
    comment: "",
    parentId: 0,
    postId,
  });
  // const params = useParams();
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.post);
  // const [postData, setPostData] = useState([]);
  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const handleClose = () => setOpen(false);

  const inputComment = (e) => {
    const { value, name } = e.target;

    setCmt((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const commentbody = {
    ...cmt,
  };

  const handleComment = async () => {
    console.log(commentbody);

    await api
      .post(`comment/create`, commentbody)
      .then((res) => {
        console.log("comment", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {postList &&
        postList.map((data) => {
          //   console.log(data);
          return (
            <>
              <div className={` ${classes.feedpost}`} key={data.id}>
                <div className="profilein flex flex-row mt-1.5 p-4 ">
                  <img
                    src={data.user.image}
                    alt="profilepic"
                    className="w-12 h-12 border-0 rounded-full"
                  />
                  <div className="w-4/5 flex flex-col text-left pl-3">
                    <p>{data.user.fName + "" + data.user.lName}</p>
                    <p className="text-slate-300 text-sm">
                      <i>{moment(data.createdAt).format("DD-MM-YYYY")}</i>
                    </p>
                  </div>
                  <div>
                    <MoreVertIcon />
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={`flex justify-center ${classes.uploadcon}`}>
                    <img
                      src={data.image}
                      alt="uploadedpic1"
                      className={` ${classes.uploadpic}`}
                    />
                  </div>
                  <CommentandLike postId={data.id} />
                </div>
                <div className="flex flex-row p-2 md:p-3 mt-3">
                  <div className={`md:w-32 flex flex-row ${classes.moreimg}`}>
                    <img
                      src={more1}
                      alt="more1"
                      className={`border border-green-400 rounded-full ${classes.more1}`}
                    />
                    <img
                      src={more2}
                      alt="more2"
                      className={`border border-green-400 rounded-full ${classes.more2}`}
                    />
                    <img
                      src={more3}
                      alt="more3"
                      className={`border border-green-400 rounded-full ${classes.more3}`}
                    />
                    <img
                      src={more4}
                      alt="more4"
                      className={`border border-green-400 rounded-full ${classes.more4}`}
                    />
                  </div>
                  <div className="w-1/3 flex flex-col text-left md:pl-3 ">
                    <p className="text-sm md:text-base">Abu Hurairah</p>
                    <p className={`text-slate-300 ${classes.liked}`}>
                      <i className={classes.liked}>and a 100 more liked this</i>
                    </p>
                  </div>
                  <div className="w-5/12 flex flex-row text-left md:pl-3 items-center justify-evenly">
                    <p className="xl:pr-6 text-xs md:text-base">
                      <span>
                        <FavoriteBorderIcon className={classes.lcsicons} />
                      </span>
                      <i> {data.likeCount}</i>
                    </p>
                    <div className="flex flex-row xl:pr-6 items-center">
                      <span>
                        <img
                          src={fillshare}
                          alt="fillshare"
                          className={classes.lcsicons1}
                        />
                      </span>
                      <p className="md:pl-2 text-xs md:text-base">
                        <i> 24K</i>
                      </p>
                    </div>
                    <p className="text-xs md:text-base">
                      <span>
                        <ChatBubbleIcon className={classes.lcsicons} />
                      </span>
                      <i>{data.commentCount}</i>
                    </p>
                  </div>
                  {/* <div open={open}
            onClose={handleClose}>
            <Box sx={ style } >
            <textarea
                id="modal-modal-description"
                name="comment"
                value={cmt.comment}
                placeholder="Write something..."
                onChange={inputComment}
                sx={{ mt: 2 }}
              />
              <SendIcon onClick={handleComment} />
            </Box>
          </div> */}
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Postlist;
