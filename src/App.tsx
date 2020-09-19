import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import ErrorPage from './pages/error/ErrorPage';

import './styles/tailwind.output.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
