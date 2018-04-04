import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const preloadedState = {
    session: {
      currentUser: window.currentUser
    }
  };
  let store = undefined;
  if (window.currentUser) {
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  // testing end
});
