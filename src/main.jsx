import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PDFProvider } from "./context/PDFcontext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

  <BrowserRouter>

    <PDFProvider>

      <App />

      <Toaster
        position="top-right"
      />

    </PDFProvider>

  </BrowserRouter>

</React.StrictMode>

);