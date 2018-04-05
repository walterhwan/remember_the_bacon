import merge from 'lodash/merge';

import {
  RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK
} from '../actions/task_actions';

// const _defaultState = Object.freeze({});

const taskReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      return merge({}, oldState, {[action.task.id]: action.task});
    case REMOVE_TASK:
      return merge({}, oldState, {[action.taskId]: null});
    default:
      return oldState;
  }
};

export default taskReducer;
