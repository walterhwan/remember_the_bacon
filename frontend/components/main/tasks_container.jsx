import React from 'react';
import LogoutButton from './logout_button';
import {
  fetchTaskIndex,
  fetchTask,
  CreateTask,
  updateTask,
  deleteTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ tasks }) => {
  return {
    tasks: tasks,
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
)(LogoutButton));
