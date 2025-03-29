import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18+
import "./index.css";
import App from "./App";

// ✅ React 18+ uses createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
