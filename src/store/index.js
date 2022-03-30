import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
console.log("CHECK", process.env.NODE_ENV);
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
