import React from 'react';
import TaskIndex from './task_index';
import {
  fetchTaskIndex,
  fetchTask,
  CreateTask,
  updateTask,
  deleteTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  return {
    task: {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CreateTask: (task) => dispatch(CreateTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex));
