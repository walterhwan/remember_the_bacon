// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
  user,
  type: RECEIVE_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  errors,
  type: RECEIVE_SESSION_ERRORS
});

export const login = (userForm) => dispatch => {
  return SessionAPIUtil.login(userForm)
    .then((user) => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  debugger;
  return SessionAPIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null)));
};

export const signup = (userForm) => dispatch => {
  return SessionAPIUtil.signup(userForm)
    .then((user) => dispatch(receiveCurrentUser(user)));
};
