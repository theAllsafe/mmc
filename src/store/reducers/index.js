import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";

const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export default reducers;
