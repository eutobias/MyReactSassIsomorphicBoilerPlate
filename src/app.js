import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./scss/style.scss";

//pages
import Home from "./components/pages/Home";
import Page1 from "./components/pages/Page1";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-1">Page 1</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page-1" component={Page1} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
