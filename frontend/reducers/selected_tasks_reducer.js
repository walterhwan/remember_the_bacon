import merge from 'lodash/merge';

import {
  RECEIVE_SELECTED_TASK, REMOVE_SELECTED_TASK
} from '../actions/task_actions';

const selectedTaskIdsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SELECTED_TASK:
      return [...oldState, action.task.id];
    case REMOVE_SELECTED_TASK:
      const newState = oldState.filter(el => el !== action.task.id);
      return newState;
    default:
      return oldState;
  }
};

export default selectedTaskIdsReducer;
