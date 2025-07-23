import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Correct import for React 18+
import App from "./App";
import "./index.css";

// Redux setup
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./reducer";

// Routing
import { BrowserRouter } from "react-router-dom";

// Toast Notifications
import { Toaster } from "react-hot-toast";

// Configure Redux store
const store = configureStore({
  reducer: rootreducer,
});

// Get root DOM element
const container = document.getElementById("root");

// Create root and render App
const root = createRoot(container); // ✅ Correct usage
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
