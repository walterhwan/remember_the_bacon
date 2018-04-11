import React from 'react';
import ListDelete from './list_delete';
import {
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
    deleteList: (list) => dispatch(deleteList(list)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDelete));
