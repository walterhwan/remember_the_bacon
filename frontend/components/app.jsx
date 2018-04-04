import React from 'react';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LandingPage from './landing_page';
import SessionLogin from './session/session_login';
import SessionSignup from './session/session_signup';
import SignupFormContainer from './session/signup_form_container.jsx';
// import { logout } from '../util/session_api_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <AuthRoute path='/login' component={SessionLogin} />
      <AuthRoute path='/signup' component={SessionSignup} />
    </Switch>
  </div>
);
// <AuthRoute path="/login" component={LoginFormContainer} />
// <AuthRoute path="/signup" component={SignupFormContainer} />

export default App;


// {window.currentUser ? <input type='button' onClick={() => logout().then()} value='Log out'></input> : <div></div>}
