import React, { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import TotalLikes from "./TotalLikes";
import CommentandLike from "./CommentandLike";
import Postdelete from "./Postdelete";
import { useDispatch, useSelector } from "react-redux";
import { getuserById } from "../../../../store/actions/UserAction";

const useStyles = makeStyles((theme) => ({
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

const UserPost = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userList } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getuserById());
  }, []);
  return (
    <>
      <div className="lg:col-span-8 ">
        {userList &&
          userList?.posts?.map((data) => {
            return (
              <>
                <div className={`${classes.feedpost}`} key={data.id}>
                  <div className="profilein flex flex-row mt-1.5 p-4">
                    <img
                      src={userList.image}
                      alt="profilepic"
                      className="w-12 h-12 border-0 rounded-full"
                    />
                    <div className="w-4/5 flex flex-col text-left pl-3">
                      <p>{userList.fName + "" + userList.lName}</p>
                      <p className="text-slate-300 text-sm">
                        <i>{moment(data.createdAt).format("DD-MM-YYYY")}</i>
                      </p>
                    </div>
                    <div>
                      {/* postdelete */}
                      <Postdelete postId={data.id} />
                    </div>
                  </div>
                  <div>{data.description}</div>
                  {data.image !== null && data.image !== "" ? (
                    <div className={`flex justify-center ${classes.uploadcon}`}>
                      <img
                        src={data.image}
                        alt="uploadedpic1"
                        className={` ${classes.uploadpic}`}
                      />
                    </div>
                  ) : null}
                  {/* cooment like and share */}
                  <CommentandLike postId={data} />
                  {/* like and comment count */}
                  <TotalLikes
                    likeCount={data.likeCount}
                    commentCount={data.commentCount}
                  />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default UserPost;
