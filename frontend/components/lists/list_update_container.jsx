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

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    list: {name: ''},
    title: 'Rename list',
    label: 'List name:',
    formType: 'update',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (list) => dispatch(updateList(list)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm));
