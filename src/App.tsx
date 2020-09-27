import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './utils/constants';
import {
  AdminPage,
  LoginPage,
  RegisterPage,
  ErrorPage,
  ForgotPassword,
} from './pages';

import 'antd/dist/antd.css';
import './styles/tailwind.output.css';
import './App.scss';
import './i18n/i18n';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={RegisterPage} />
        <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
