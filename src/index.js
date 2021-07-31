import React from "react";
import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
reportWebVitals();