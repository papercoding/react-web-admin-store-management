import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './utils/constants';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/RegisterPage';
import ErrorPage from './pages/error/ErrorPage';

import 'antd/dist/antd.css';
import './styles/tailwind.output.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
