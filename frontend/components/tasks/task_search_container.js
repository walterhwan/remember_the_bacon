import React from 'react';
import TaskSearch from './task_search';
import {
  fetchTaskSearch,
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskSearch: (searchTerm) => dispatch(fetchTaskSearch(searchTerm)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskSearch));
