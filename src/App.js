import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./route";
import { Provider } from "react-redux";
import { setIsAuth } from "./store/actions/Auth";
import store from "./store";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  if (token) {
    store.dispatch(setIsAuth(true));
  }
  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
  }, [store.getState().auth.isAuthenticated]);
  return (
    <Provider store={store}>
      <div className="App" >
        <Router basename= {'/mmc'}>
          <BaseRoute />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
