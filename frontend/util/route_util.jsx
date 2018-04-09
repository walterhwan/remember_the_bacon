import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';


const Auth = ({component: Component, path, loggedIn, exact, currentUser}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/lists/${currentUser.list_ids[0]}`} />
      )
    )}/>
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
  };
};

export const AuthRoute = withRouter(connect(
  mapStateToProps,
  null
)(Auth));

export const ProtectedRoute = withRouter(connect(
  mapStateToProps,
  null
)(Protected));
