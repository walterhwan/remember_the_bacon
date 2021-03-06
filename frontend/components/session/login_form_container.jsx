import React from 'react';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';

const mapStateToProps = ({ errors, session }) => {
  const user = session.currentUser;
  return {
    errors: errors.session,
    navLink: <Link to="/signup">Sign Up (LoginFormContainer)</Link>,
    user: user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
