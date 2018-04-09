import React from 'react';
import TaskEdit from './task_edit';
import {
  updateTask,
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const defaultTask = {
  list_id: '',
  description: '',
  due_date: '',
  estimate: '',
  completed: false,
};

const mapStateToProps = ({ entities }, ownProps) => {
  // const selectedTasks = ownProps.selectedTasks;
  let task = ownProps.task;
  // if (selectedTasks.size === 1) {
  //   task = entities.tasks[selectedTasks[0]];
  // }
  return { task };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEdit));
