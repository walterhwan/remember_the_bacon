import { combineReducers } from 'redux';
import showCompletedReducer from './show_completed_reducer';

const uiReducer = combineReducers({
  showCompleted: showCompletedReducer,
});

export default uiReducer;
