import ReactDOM from "react-dom";
import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import "./scss/style.scss";
// let store = createStore(reducers);

//pages
import Error404 from "./components/pages/Error404";

ReactDOM.render(
  // <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={Error404} />
      </Switch>
    </HashRouter>,
  // </Provider>,
  document.getElementById("root")
);
