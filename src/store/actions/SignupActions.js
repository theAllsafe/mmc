import { api } from "../../helper/instance";
import { PERSONAL_DETAILS, SHOW_TOAST } from "../constant/types";

export const getpersonalDetails = () => {
  return async (dispatch, getState) => {
    api
      .post("user/personal")
      .then((response) => {
        console.log(`🚀 - .then - response.data`, response.data);
        dispatch({
          type: PERSONAL_DETAILS,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
