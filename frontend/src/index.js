import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// Import Bootstrap 5 JS, CSS and Icons

import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./styles/index.css";

const app = document.getElementById("root");

const root = ReactDOM.createRoot(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
