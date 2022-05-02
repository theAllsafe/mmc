import { GET_NOTIFICATION_LIST } from "../constant/types";

const initialState = {
  notificationList: [],
};

const notificationReducer = (state = initialState, action) => {
  // console.log("hello");
  switch (action.type) {
    case GET_NOTIFICATION_LIST:
      return {
        ...state,
        notificationList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notificationReducer;
