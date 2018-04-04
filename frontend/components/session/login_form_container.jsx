import React from 'react';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/signup">Sign Up (LoginFormContainer)</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
