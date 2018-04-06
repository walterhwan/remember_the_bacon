import { combineReducers } from 'redux';
import taskReducer from './tasks_reducer';

const entitiesReducer = combineReducers({
  tasks: taskReducer
});

export default entitiesReducer;
