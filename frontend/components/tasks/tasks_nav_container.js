import React from 'react';
import TaskNav from './task_nav';
import {
  fetchTaskIndex,
  fetchTask,
  CreateTask,
  updateTask,
  deleteTask,
  deleteAllSelectedTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  const { tasks, selectedTaskIds } = entities;
  return {
    tasks: Object.values(tasks),
    selectedTaskIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskIndex: () => dispatch(fetchTaskIndex()),
    fetchTask: (id) => dispatch(fetchTask(id)),
    CreateTask: (task) => dispatch(CreateTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    deleteAllSelectedTask: () => dispatch(deleteAllSelectedTask()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskNav));
