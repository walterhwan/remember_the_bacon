import React from 'react';
import ListIndex from './list_index';
import {
  fetchListIndex,
  fetchList,
  CreateList,
  updateList,
  deleteList
} from '../../actions/list_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  const { lists } = entities;
  return {
    lists: Object.values(lists),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListIndex: () => dispatch(fetchListIndex()),
    fetchList: (id) => dispatch(fetchList(id)),
    CreateList: (task) => dispatch(CreateList(task)),
    updateList: (task) => dispatch(updateList(task)),
    deleteList: (id) => dispatch(deleteList(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListIndex));
