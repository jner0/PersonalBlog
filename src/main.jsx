import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogApp } from "./BlogApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogApp />
    </BrowserRouter>
  </React.StrictMode>
);
