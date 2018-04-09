import React from 'react';
import ListDetail from './list_detail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  const list = entities.lists[ownProps.match.params.listId] || {name: '', task_ids: [], num_completed: 0};
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDetail));
