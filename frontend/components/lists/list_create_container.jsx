import React from 'react';
import ListCreate from './list_create';
import {
  fetchListIndex,
  fetchList,
  createList,
  updateList,
  deleteList
} from '../../actions/list_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  return {
    list: {name: ''},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (list) => dispatch(createList(list)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCreate));
