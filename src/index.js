import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Reducer, { initialState } from "./components/Reducer";
import StateProvider from "./components/Stateprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
reportWebVitals();
