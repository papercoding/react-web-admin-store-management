import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./utils/constants";
import { AdminPage, LoginPage, ErrorPage } from "./pages";

import "antd/dist/antd.css";
import "./i18n/i18n";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
