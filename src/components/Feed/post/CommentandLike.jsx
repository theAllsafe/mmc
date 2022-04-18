import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../helper/instance";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Like from "./Like";
import Share from "./Share";

const useStyles = makeStyles((theme) => ({
  maincont: {
    background: "#545A70",
  },

  lcs: {
    position: "absolute",
    left: "57%",
    top: "93%",
  },

  lcsicons: {
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.between(425, 768)]: {
      fontSize: "12px !important",
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

  const handleComment = async () => {
    console.log(commentbody);

    await api
      .post(`comment/create`, commentbody)
      .then((res) => {
        console.log("comment", res.data.data);
        setCmt({
          comment: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [showComment, setShowComment] = useState(false);
  const toggleComments = () => setShowComment((showComment) => !showComment);

  return (
    <>
      <div className={`w-24 md:w-36  flex justify-evenly ${classes.lcs}`}>
        {/* comment icon */}
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
