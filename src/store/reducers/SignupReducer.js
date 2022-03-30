import { PERSONAL_DETAILS } from "../constant/types";

const initialState = {
  personalDetails: [],
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_DETAILS:
      return {
        ...state,
        personalDetails: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default SignupReducer;
