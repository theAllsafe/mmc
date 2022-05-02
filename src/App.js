import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoute from "./route";
import { Provider } from "react-redux";
import { setIsAuth } from "./store/actions/Auth";
import { persistor, store } from "./store";
import Cookies from "universal-cookie";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const cookies = new Cookies();
  const [token, setToken] = useState(cookies.get("access_token"));
  if (token) {
    store.dispatch(setIsAuth(true));
  }
  const active = store.getState().auth.isAuthenticated;
  useEffect(() => {
    setToken(cookies.get("access_token"));
    console.log(store.getState());
  }, [active]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <BaseRoute />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}
export default App;
