import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "./utils/constants";
import { AdminPage, LoginPage, ErrorPage } from "./pages";

import "antd/dist/antd.css";
import "./i18n/i18n";
import { RootState } from "./redux/rootReducer";

function App() {
  const token = useSelector((state: RootState) => state.appConfigs.token);
  const isSignedIn = !!token;
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.LOGIN}>
          {isSignedIn ? <Redirect to={ROUTES.DASHBOARD} /> : <LoginPage />}
        </Route>
        <Route
          path={ROUTES.ADMIN}
          component={isSignedIn ? AdminPage : LoginPage}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
