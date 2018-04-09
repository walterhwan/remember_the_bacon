import merge from 'lodash/merge';

import {
  RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST
} from '../actions/list_actions';
import {
  RECEIVE_TASK_FOR_LIST, REMOVE_TASK_FOR_LIST
} from '../actions/task_actions';

const listReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, oldState, {[action.list.id]: action.list});
    case REMOVE_LIST:
      newState = merge({}, oldState);
      delete newState[action.listId];
      return newState;
    case RECEIVE_TASK_FOR_LIST:
      newState = merge({}, oldState);
      newState[action.task.list_id]['task_ids'].push(action.task.id);
      return newState;
    case REMOVE_TASK_FOR_LIST:
      newState = merge({}, oldState);
      const newTaskIds = newState[action.task.list_id]['task_ids']
      .filter(el => el !== action.taskId);
      newState[action.task.list_id]['task_ids'] = newTaskIds;
      return newState;
    default:
      return oldState;
  }
};

export default listReducer;
