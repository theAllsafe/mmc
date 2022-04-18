import { api } from "../../helper/instance";
import { GET_NOTIFICATION_LIST, SHOW_TOAST } from "../constant/types";

export const getNotificationList = () => {
  return async (dispatch) => {
    api
      .get(`notification`)
      .then((response) => {
        console.log(`🚀 - return - Notificationlist`, response);
        const data = response.data.data[0];
        dispatch({
          type: GET_NOTIFICATION_LIST,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: SHOW_TOAST, payload: error.message });
      });
  };
};
