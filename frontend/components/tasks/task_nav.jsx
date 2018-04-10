import React from 'react';
import TaskIndexContainer from './task_index_container';
import TaskCreateContainer from './task_create_container';
import { toggleTaskDetailSection } from '../../util/css_util.jsx';


class TaskNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleSelectTab = this.handleSelectTab.bind(this);
  }

  handleToggleTaskOption(e) {
    const taskToolBar = e.target;
    const taskOption = document.getElementById('task-option');
    const taskDropDown = document.getElementById('task-drop-down');
    if (taskDropDown.classList.contains('hidden')) {
      taskDropDown.classList.remove('hidden');
      taskOption.classList.add('task-option-on-click');
    } else {
      taskDropDown.classList.add('hidden');
      taskOption.classList.remove('task-option-on-click');
    }
  }

  handleCloseTaskOption(e) {
    const taskOption = document.getElementById('task-option');
    const taskDropDown = document.getElementById('task-drop-down');
    taskDropDown.classList.add('hidden');
    taskOption.classList.remove('task-option-on-click');
  }

  handleDeleteTask() {
    const deleteTask = this.props.deleteTask;
    const taskOption = document.getElementById('task-option');
    this.props.selectedTaskIds.forEach((taskId) => {
      deleteTask(taskId);
    });
    const taskDropDown = document.getElementById('task-drop-down');
    taskDropDown.classList.add('hidden');
    taskOption.classList.remove('task-option-on-click');

    this.props.deleteAllSelectedTask();

    toggleTaskDetailSection();
  }

  handleSelectTab(e) {
    const tabs = document.getElementsByClassName('task-tab');
    const currentTab = e.currentTarget;
    for (const tab of tabs) {
      tab.classList.remove('selected');
    }
    currentTab.classList.add('selected');

    const selectedTab = document.querySelector('.task-tab.selected');
    const showCompleted = (selectedTab.getAttribute('data') === 'true');
    this.props.switchTab(showCompleted);
  }

  render() {
    return (
      <div className='task-nav-div'>
        <div className='tab-nav'>
          <p
            onClick={this.handleSelectTab}
            className='task-tab selected'
            data='false'>
            Incomplete
          </p>
          <p
            onClick={this.handleSelectTab}
            className='task-tab'
            data='true'>
            Completed
          </p>
        </div>
        <div
          className='task-tool-bar'>
          <div
            className='task-option'
            id='task-option'
            onClick={ this.handleToggleTaskOption }>
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
        <div className='tasks-index-div'>
          <TaskIndexContainer />
        </div>
      </div>
    );
  }
}

export default TaskNav;
