import React from 'react';
import TaskEdit from './task_edit';
import {
  updateTask,
} from '../../actions/task_actions';
import {
  fetchList,
} from '../../actions/list_actions';
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
  let { tasks, selectedTaskIds} = entities;
  let task = defaultTask;
  if (selectedTaskIds.length === 1) {
    task = tasks[selectedTaskIds[0]];
  }
  return {
    task,
    selectedTaskIds,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTask(task)),
    fetchList: (id) => dispatch(fetchList(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskEdit));
