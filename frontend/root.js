import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  // ReactDOM.render(<Root store={store}>, root);
  ReactDOM.render(<h1>This is root</h1>, root);

  // testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
