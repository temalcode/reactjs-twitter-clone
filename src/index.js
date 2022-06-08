import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
