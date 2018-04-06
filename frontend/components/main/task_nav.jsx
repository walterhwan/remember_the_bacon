import React from 'react';
import TaskIndexContainer from './task_index_container';

class TaskNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    applyCreateTaskOnFocusEvents();
  }

  render() {
    return (
      <div>
        <form
          className='task-bar'>
          <input
            className='task-create'
            type="text"
            placeholder="Add a task..." />
          <div className="task-util-bar">
            <div className=""></div>
            <input
              type="submit"
              value="Add Task">
            </input>
          </div>
        </form>
        <TaskIndexContainer />
      </div>
    );
  }
}

const applyCreateTaskOnFocusEvents = () => {
  let taskBar = document.getElementsByClassName('task-bar')[0];
  let taskBarInput = document.getElementsByClassName('task-create')[0];

  taskBarInput.addEventListener("focus", function () {
    taskBar.style.height = '90px';
  });

  taskBarInput.addEventListener("focusout", function () {
    taskBar.style.height = '50px';
  });
};

export default TaskNav;