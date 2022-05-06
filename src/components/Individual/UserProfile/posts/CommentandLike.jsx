import React, { useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../../helper/instance";
import SendIcon from "@mui/icons-material/Send";
import Like from "./Like";
import Share from "./Share";
import { getuserById } from "../../../../store/actions/UserAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  lcs: {
    position: "relative",
    left: "63%",
    bottom: "4%",
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
  texta: {
    background: "#202836",
    paddding: "10px",
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
}));

const CommentandLike = ({ postId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cmt, setCmt] = useState({
    comment: "",
    parentId: 0,
  });

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
    postId: postId.id,
  };

  const handleComment = () => {
    console.log(commentbody);

    api
      .post(`comment/create`, commentbody)
      .then((res) => {
        console.log("comment", res.data.data);
        if (res.data.status === true) {
          setCmt({
            comment: "",
          });
          dispatch(getuserById());
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong!!!!!");
      });
  };

  const [showComment, setShowComment] = useState(false);
  const toggleComments = () => setShowComment((showComment) => !showComment);
  return (
    <>
      <div className={`w-24 md:w-36  flex justify-evenly ${classes.lcs}`}>
        <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
          <ChatBubbleIcon
            className={classes.lcsicons}
            onClick={toggleComments}
          />
        </div>
        {/* share icon */}
        <Share />
        {/* like icon */}
        <Like postId={postId} />
      </div>
      <div
        className={`mt-3 mx-3 flex flex-col ${classes.combox}`}
        style={{ display: showComment === true ? "flex" : "none" }}
      >
        <label htmlFor="comment" className="text-left">
          Comments
        </label>
        <div className="flex flex-row">
          <textarea
            className={classes.texta}
            rows="2"
            cols="20"
            placeholder="Add a Comment..."
            name="comment"
            value={cmt.comment}
            onChange={inputComment}
          ></textarea>
          <SendIcon onClick={handleComment} />
        </div>
      </div>
    </>
  );
};

export default CommentandLike;
