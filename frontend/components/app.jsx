import React from 'react';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import LandingPage from './landing_page';
// import { logout } from '../util/session_api_util';

// <h1>This is an app</h1>
const App = () => (
  <div>
    <Switch>
      <Route path='/' component={LandingPage} />
    </Switch>
  </div>
);
// <AuthRoute path="/login" component={LoginFormContainer} />
// <AuthRoute path="/signup" component={SignupFormContainer} />

export default App;


// {window.currentUser ? <input type='button' onClick={() => logout().then()} value='Log out'></input> : <div></div>}
