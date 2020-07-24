import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import stocksData from "./data/stock-data.json";

ReactDOM.render(
  <Router>
    <App stocksData={stocksData} />
  </Router>,
  document.getElementById("root")
);
