import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => ({
  currentUser: user,
  type: RECEIVE_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  errors,
  type: RECEIVE_SESSION_ERRORS
});

export const login = (userForm) => dispatch => {
  return SessionAPIUtil.login(userForm)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(receiveErrors(null));
      },
      (errors) => dispatch(receiveErrors(errors))
    );
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null)));
};

export const signup = (userForm) => dispatch => {
  return SessionAPIUtil.signup(userForm)
    .then(
      (user) => {
        dispatch(receiveCurrentUser(user));
        dispatch(receiveErrors(null));
      },
      (errors) => dispatch(receiveErrors(errors))
  );
};
