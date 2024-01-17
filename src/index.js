import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {Toaster} from "react-hot-toast"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
   
      <Provider store={store}>

        <App />
        <Toaster/>
      </Provider>
    
  </BrowserRouter>
);
