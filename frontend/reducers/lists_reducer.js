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
      return merge({}, oldState, {[action.listId]: null});
    default:
      return oldState;
  }
};

export default listReducer;
