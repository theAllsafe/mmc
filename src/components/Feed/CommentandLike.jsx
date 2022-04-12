import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../helper/instance";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Modal } from "@mui/material";
import fillshare from "./res/fillshare.svg";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Box } from "@mui/system";

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

const CommentandLike = ({ postId }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [cmt, setCmt] = useState({
    comment: "",
    parentId: 0,
    postId,
  });

  const [like, setLike] = useState({
    isLike: false,
    postId,
  });

  const handleOpen = () => setOpen(true);
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

  const inputLike = (e) => {
    const { value, name } = e.target;

    setLike((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const likebody = {
    ...like,
  };

  const handleLike = async () => {
    await api
      .post(`like/add`, likebody)
      .then((res) => console.log("like is", res))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className={`w-24 md:w-36  flex justify-evenly ${classes.lcs}`}>
        {/* comment icon */}
        <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
          <ChatBubbleIcon className={classes.lcsicons} onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
          </Modal>
        </div>
        <div className="h-6 w-6 md:h-10 md:w-10 bg-blue-400 rounded-full items-center flex justify-center">
          <img src={fillshare} alt="fillshare" className={classes.lcsicons1} />
        </div>
        {/* like icon */}
        <div className="h-6 w-6 md:h-10 md:w-10 bg-slate-400 rounded-full items-center flex justify-center">
          <FavoriteIcon
            className={classes.lcsicons}
            name="isLike"
            value={like.isLike}
            onChange={inputLike}
            onClick={handleLike}
          />
        </div>
      </div>
    </>
  );
};

export default CommentandLike;
