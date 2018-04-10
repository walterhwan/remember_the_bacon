import merge from 'lodash/merge';

import {
  RECEIVE_TAB
} from '../actions/ui_actions';

const showCompletedReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TAB:
      return action.showCompleted;
    default:
      return oldState;
  }
};

export default showCompletedReducer;
