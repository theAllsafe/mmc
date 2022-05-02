import { GET_JOB_LIST } from "../constant/types";

const initialState = {
  jobList: [],
};

const jobReducer = (state = initialState, action) => {
  // console.log("hello");
  switch (action.type) {
    case GET_JOB_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default jobReducer;
