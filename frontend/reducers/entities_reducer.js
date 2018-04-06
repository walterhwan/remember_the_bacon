import { combineReducers } from 'redux';
import taskReducer from './tasks_reducer';
import listReducer from './lists_reducer';

const entitiesReducer = combineReducers({
  tasks: taskReducer,
  lists: listReducer,
});

export default entitiesReducer;
