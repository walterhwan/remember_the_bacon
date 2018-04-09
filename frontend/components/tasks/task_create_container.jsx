import React from 'react';
import TaskCreate from './task_create';
import {
  createTask,
} from '../../actions/task_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    task: {
      list_id: ownProps.match.params.listId,
      description: '',
      due_date: '',
      estimate: '',
      completed: false,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskCreate));
