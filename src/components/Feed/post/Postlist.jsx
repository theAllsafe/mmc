import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../../../store/actions/PostAction";
import moment from "moment";
import CommentandLike from "./CommentandLike";
import Totallikes from "./Totallikes";

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
}));

const Postlist = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPostList());
  }, []);

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
                  {data.image != null && data.image != "" ? (
                    <div className={`flex justify-center ${classes.uploadcon}`}>
                      <img
                        src={data.image}
                        alt="uploadedpic1"
                        className={` ${classes.uploadpic}`}
                      />
                    </div>
                  ) : null}
                  <CommentandLike postId={data} />
                </div>
                {/* total likes and comments */}
                <Totallikes
                  likeCount={data.likeCount}
                  commentCount={data.commentCount}
                />
              </div>
            </>
          );
        })}
    </>
  );
};

export default Postlist;
