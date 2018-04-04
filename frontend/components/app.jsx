import React from 'react';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import { logout } from '../actions/session_actions';

const App = () => (
  <div>
    <h1>This is an app</h1>
    {window.currentUser ? <button onClick={() => logout()}>Log out</button> : <div></div>}

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
