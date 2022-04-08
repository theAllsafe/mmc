import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import signupReducer from "./SignupReducer";

const reducers = combineReducers({
  auth: authReducer,
  signup: signupReducer,
});

export default reducers;
