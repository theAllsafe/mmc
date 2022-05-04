import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import notificationReducer from "./NotificationReducer";
import postReducer from "./PostReducer";
import userReducer from "./UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import jobReducer from "./JobReducer";
import productReducer from "./ProductReducer";

const persistConfig = {
  key: "persist-store",
  storage,
};

const reducers = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  post: persistReducer(persistConfig, postReducer),
  notification: persistReducer(persistConfig, notificationReducer),
  user: persistReducer(persistConfig, userReducer),
  job: persistReducer(persistConfig, jobReducer),
  product: persistReducer(persistConfig, productReducer),
});

export default reducers;
