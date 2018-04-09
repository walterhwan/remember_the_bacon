import React from 'react';
import TaskIndexContainer from './task_index_container';
import TaskCreateContainer from './task_create_container';

class TaskNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleOpenTaskOption(e) {
    const taskToolBar = e.target;
    const taskDropDown = document.getElementById('task-drop-down');
    if (taskDropDown.classList.contains('hidden')) {
      taskDropDown.classList.remove('hidden');
    } else {
      taskDropDown.classList.add('hidden');
    }
  }

  handleDeleteTask() {
    console.log('delete task');
  }

  render() {
    return (
      <div className='task-nav-div'>
        <div className='seperator'></div>
        <div
          className='task-tool-bar'
          onClick={ this.handleOpenTaskOption }>
          <div className='task-option'>
            <i className="material-icons more-horiz">more_horiz</i>
            <i className="material-icons arrow-drop-down">
              arrow_drop_down
            </i>
          </div>
          <div
            className='task-drop-down hidden'
            id='task-drop-down'>
            <p onClick={this.handleDeleteTask}>Delete Task</p>
          </div>
        </div>
        <TaskCreateContainer />
        <TaskIndexContainer />
      </div>
    );
  }
}

export default TaskNav;
