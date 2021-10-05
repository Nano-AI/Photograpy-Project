import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
