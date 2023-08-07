import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeReduxToolkit from "store/reduxToolkit";

// eslint-disable-next-line no-unused-vars
import storeReduxbasic from "./store/reduxBasic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //use storeReduxbasic to change the provider store
  <Provider store={storeReduxToolkit /* storeReduxbasic */}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
