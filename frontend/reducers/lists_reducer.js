import merge from 'lodash/merge';

import {
  RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST
} from '../actions/list_actions';

const listReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, oldState, {[action.list.id]: action.list});
    case REMOVE_LIST:
      const newState = merge({}, oldState);
      delete newState[action.listId];
      return newState;
    default:
      return oldState;
  }
};

export default listReducer;
