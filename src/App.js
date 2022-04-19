import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./route";
import { Provider } from "react-redux";
import { setIsAuth } from "./store/actions/Auth";
import store from "./store";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  const [token, setToken] = useState(cookies.get("access_token"));
  if (token) {
    store.dispatch(setIsAuth(true));
  }
  useEffect(() => {
    setToken(cookies.get("access_token"));
    console.log(store.getState());
  }, [store.getState().auth.isAuthenticated]);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <BaseRoute />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
