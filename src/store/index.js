import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
// console.log("CHECK", process.env.NODE_ENV);
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store);
