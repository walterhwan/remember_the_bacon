import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import taskReducer from './task_reducers';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tasks: taskReducer,
});

export default rootReducer;
