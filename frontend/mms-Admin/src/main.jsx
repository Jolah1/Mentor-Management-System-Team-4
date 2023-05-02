import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import theme from "./theme/theme";

import "react-toastify/dist/ReactToastify.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
