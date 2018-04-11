import React from 'react';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './landing_page';
import MainPage from './main/main_page';
import SessionLogin from './session/session_login';
import SessionSignup from './session/session_signup';
import SignupFormContainer from './session/signup_form_container.jsx';


const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path='/lists/:listId' component={MainPage} />
      <AuthRoute path='/login' component={SessionLogin} />
      <AuthRoute path='/signup' component={SessionSignup} />
      <AuthRoute path='/' component={LandingPage} />
      // <ProtectedRoute path='/lists/1' component={MainPage} />
    </Switch>
  </div>
);

export default App;
