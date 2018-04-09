import React from 'react';
import TaskNav from './task_nav';
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
  const { tasks } = entities;
  return {
    tasks: Object.values(tasks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskIndex: () => dispatch(fetchTaskIndex()),
    fetchTask: (id) => dispatch(fetchTask(id)),
    CreateTask: (task) => dispatch(CreateTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskNav));
