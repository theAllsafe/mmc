import { GET_USER_ID } from "../constant/types";

const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action) => {
  // console.log("hello");
  switch (action.type) {
    case GET_USER_ID:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
