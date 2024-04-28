import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { SideBarContextProvider } from "./store/sidebar-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideBarContextProvider>
    <App />
  </SideBarContextProvider>
);
