import React from 'react';
import SignupForm from './signup_form.jsx';
import {
  signup, login,
  clearSessionErrors
} from '../../actions/session_actions';
import { connect } from 'react-redux';
import {
  Route, withRouter, Link,
  NavLink, Redirect, Switch
} from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    navLink: <Link to="/login">log in (SignupFormContainer)</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
