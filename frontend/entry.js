import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { login, logout, signup } from './util/session_api_util';
import {
  fetchListIndex,
  fetchList,
  createList,
  updateList,
  deleteList
} from './actions/list_actions';
// test end

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
  window.fetchListIndex = fetchListIndex;
  window.fetchList = fetchList;
  window.createList = createList;
  window.updateList = updateList;
  window.deleteList = deleteList;
  window.logout = logout;
  // testing end
});
