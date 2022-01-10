import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/containers/App/App";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "../src/containers/App/store";
// import dataReducer from "./components/share/CurrencySlice";

// const store = configureStore({
//   reducer: {
//     theCurrency: dataReducer,
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
