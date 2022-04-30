import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../../../../helper/instance";

const useStyles = makeStyles((theme) => ({
  lcsicons: {
    [theme.breakpoints.between(320, 426)]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.between(425, 768)]: {
      fontSize: "12px !important",
    },
  },
}));

const Like = ({ postId }) => {
  const classes = useStyles();
  const [like, setLike] = useState({
    isLike: postId?.like[0]?.isLike,
  });

  const handleLike = async () => {
    await api
      .post(`like/add`, {
        isLike: !like.isLike,
        postId: postId.id,
      })
      .then((res) => console.log("like is", res.data.data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="h-6 w-6 md:h-10 md:w-10 bg-slate-400 rounded-full items-center flex justify-center">
        <FavoriteIcon
          className={classes.lcsicons}
          name="isLike"
          value={like.isLike}
          onChange={(e) => setLike(e.target.value)}
          onClick={handleLike}
        />
      </div>
    </>
  );
};

export default Like;
