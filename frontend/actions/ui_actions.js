
export const RECEIVE_TAB = 'RECEIVE_TAB';

const receiveTab = (showCompleted) => {
  return {
    type: RECEIVE_TAB,
    showCompleted
  };
};

export const switchTab = (showCompleted) => dispatch => {
  dispatch(receiveTab(showCompleted));
};
