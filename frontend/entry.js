import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  // preload user
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
});
