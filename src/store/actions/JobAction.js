import { api } from "../../helper/instance";
import { GET_JOB_LIST, SHOW_TOAST } from "../constant/types";

export const getJobList = () => {
  return async (dispatch) => {
    api
      .get(`job/joblist`)
      .then((response) => {
        console.log(`🚀 - return - Joblist`, response);
        const data = response.data.data;
        // console.log(data);
        dispatch({
          type: GET_JOB_LIST,
          payload: data,
        });
        // console.log(
        //   dispatch({
        //     type: GET_POST_LIST,
        //     payload: data,
        //   })
        // );
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
