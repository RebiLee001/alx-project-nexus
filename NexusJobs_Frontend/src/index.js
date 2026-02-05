import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { JobProvider } from "./context/JobContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);
