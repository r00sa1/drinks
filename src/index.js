import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Search from "./components/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Search />
    <App />
  </React.StrictMode>
);
