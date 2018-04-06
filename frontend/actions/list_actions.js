import * as ListAPIUtil from '../util/list_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';


const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};

const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list,
});

const removeList = (listId) => ({
  type: RECEIVE_LIST,
  listId,
});

export const fetchListIndex = () => dispatch => {
  return ListAPIUtil.requestListIndex()
    .then(
      (lists) => dispatch(receiveLists(lists))
    );
};

export const fetchList = (id) => dispatch => {
  return ListAPIUtil.requestList(id)
    .then(
      (list) => dispatch(receiveList(list))
    );
};

export const createList = (listForm) => dispatch => {
  return ListAPIUtil.createList(listForm)
    .then(
      (list) => dispatch(receiveList(list))
    );
};

export const updateList = (listForm) => dispatch => {
  return ListAPIUtil.updateList(listForm)
    .then(
      (list) => dispatch(receiveList(list))
    );
};

export const deleteList = (id) => dispatch => {
  return ListAPIUtil.deleteList(id)
    .then(
      (list) => dispatch(removeList(id))
    );
};
