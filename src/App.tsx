import React from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTES } from "./utils/constants";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import ErrorPage from "./pages/error/ErrorPage";

import "./styles/tailwind.output.css";
import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
