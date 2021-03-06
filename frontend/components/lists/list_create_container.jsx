import React from 'react';
import ListForm from './list_form';
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
    title: 'Add a list',
    label: 'Please enter a new list name:',
    formType: 'create',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (list) => dispatch(createList(list)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm));
