import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { importWasm } from "./importWasm";

ReactDom.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("app")
);
