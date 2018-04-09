import React from 'react';
import TaskIndex from './task_index';
import {
  fetchTaskIndex,
  fetchListTasks,
  fetchTask,
  CreateTask,
  updateTask,
  deleteTask
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  const { tasks } = entities;
  return {
    tasks: Object.values(tasks),
    listId: ownProps.match.params.listId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTaskIndex: () => dispatch(fetchTaskIndex()),
    fetchListTasks: (listId) => dispatch(fetchListTasks(listId)),
    fetchTask: (id) => dispatch(fetchTask(id)),
    CreateTask: (task) => dispatch(CreateTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex));
