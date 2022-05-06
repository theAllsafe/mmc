import { api } from "../../helper/instance";
import { GET_USER_ID, SHOW_TOAST } from "../constant/types";

export const getuserById = () => {
  return async (dispatch) => {
    api
      .get(`user`)
      .then((response) => {
        console.log(`🚀 - return - User`, response);
        if (response.data.status === true) {
          const data = response.data.data[0];
          dispatch({
            type: GET_USER_ID,
            payload: data,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
