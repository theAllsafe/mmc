import { api } from "../../helper/instance";
import { GET_POST_LIST, SHOW_TOAST } from "../constant/types";

export const getPostList = () => {
  return async (dispatch) => {
    api
      .get(`post`)
      .then((response) => {
        console.log(`🚀 - return - Postlist`, response);
        if (response.data.status === true) {
          const data = response.data.data;
          // console.log(data);
          dispatch({
            type: GET_POST_LIST,
            payload: data,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
