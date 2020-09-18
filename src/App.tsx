import React from 'react';
import './App.scss';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import './styles/tailwind.output.css';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  return (
    <div className='App'>
      {/* <LoginPage /> */}
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
