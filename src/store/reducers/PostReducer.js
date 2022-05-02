import { GET_POST_LIST } from "../constant/types";

const initialState = {
  postList: [],
};

const postReducer = (state = initialState, action) => {
  // console.log("hello");
  switch (action.type) {
    case GET_POST_LIST:
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
