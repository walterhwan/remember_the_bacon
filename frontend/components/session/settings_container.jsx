import React from 'react';
import SettingsButton from './settings_button';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, errors }) => {
  return {
    errors: errors.session,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsButton));
