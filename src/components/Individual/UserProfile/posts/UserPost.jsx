import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import TotalLikes from "./TotalLikes";
import CommentandLike from "./CommentandLike";

const useStyles = makeStyles((theme) => ({
  feedpost1: {
    background: "#202836",
    borderRadius: "20px",
    color: "white",
    marginBottom: "14px",
    // height: "46.5%",
    [theme.breakpoints.down(1024)]: {
      width: "95%",
      margin: "4% auto",
      // height: "47%",
    },
    [theme.breakpoints.between(1024, 1280)]: {
      width: "95%",
      margin: "4% auto",
      // height: "41%",
    },
    [theme.breakpoints.between(1536, 2561)]: {
      width: "100%",
      margin: "4% auto",
      // height: "32%",
    },
  },
}));

const UserPost = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <div className="lg:col-span-8 ">
        {post &&
          post.posts.map((data) => {
            return (
              <>
                <div className={`${classes.feedpost1}`} key={post.id}>
                  <div className="profilein flex flex-row mt-1.5 p-4">
                    <img
                      src={post.image}
                      alt="profilepic"
                      className="w-12 h-12 border-0 rounded-full"
                    />
                    <div className="w-4/5 flex flex-col text-left pl-3">
                      <p>{post.fName + "" + post.lName}</p>
                      <p className="text-slate-300 text-sm">
                        <i>{moment(data.createdAt).format("DD-MM-YYYY")}</i>
                      </p>
                    </div>
                    <div>
                      <MoreVertIcon />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt="uploadedpic1"
                      className="w-11/12 h-auto"
                    />
                  </div>
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
