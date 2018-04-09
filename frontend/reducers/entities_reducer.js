import { combineReducers } from 'redux';
import taskReducer from './tasks_reducer';
import listReducer from './lists_reducer';
import selectedTaskIdsReducer from './selected_tasks_reducer';

const entitiesReducer = combineReducers({
  tasks: taskReducer,
  lists: listReducer,
  selectedTaskIds: selectedTaskIdsReducer,
});

export default entitiesReducer;
