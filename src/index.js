import React from "react";
import ReactDOM from "react-dom";
import "./SCSS/main.css";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "../public/serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register("/sw.js");
// registerSW();

// async function registerSW() {
//   if ("serviceWorker" in navigator) {
//     try {
//       await navigator.serviceWorker.register("/sw.js");
//     } catch (e) {
//       console.log(`SW registration failed`);
//     }
//   }
// }
