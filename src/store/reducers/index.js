import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import notificationReducer from "./NotificationReducer";
import postReducer from "./PostReducer";

const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  notification: notificationReducer,
});

export default reducers;
