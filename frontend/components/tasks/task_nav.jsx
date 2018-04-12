import React from 'react';
import TaskIndexContainer from './task_index_container';
import TaskCreateContainer from './task_create_container';
import { toggleTaskDetailSection } from '../../util/css_util.jsx';


class TaskNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.renderTaskCreate = this.renderTaskCreate.bind(this);
    this.toggleTaskOption = this.toggleTaskOption.bind(this);
    this.handleClickComplete = this.handleClickComplete.bind(this);
    this.handleClickIncomplete = this.handleClickIncomplete.bind(this);
    this.applyBlurCloseDropDownListener = this.applyBlurCloseDropDownListener.bind(this);
  }

  componentDidMount() {
    this.applyBlurCloseDropDownListener();
  }

  applyBlurCloseDropDownListener() {
    const taskOption = document.getElementById('task-option-button');
    const taskDropDown = document.getElementById('task-drop-down');

    document.getElementById('main-page-div')
      .addEventListener('click', () => {
      this.closeTaskOption();
    });
    taskOption.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleTaskOption();
    });
  }

  toggleTaskOption(e) {
    const taskDropDown = document.getElementById('task-drop-down');
    if (taskDropDown.classList.contains('hidden')) {
      this.openTaskOption();
    } else {
      this.closeTaskOption();
    }
  }

  closeTaskOption() {
    const taskOption = document.getElementById('task-option-button');
    const taskDropDown = document.getElementById('task-drop-down');
    taskDropDown.classList.add('hidden');
    taskOption.classList.remove('on-click');
  }

  openTaskOption() {
    const taskOption = document.getElementById('task-option-button');
    const taskDropDown = document.getElementById('task-drop-down');
    taskDropDown.classList.remove('hidden');
    taskOption.classList.add('on-click');
  }

  handleDeleteTask() {
    this.closeTaskOption();

    const deleteTask = this.props.deleteTask;
    this.props.selectedTaskIds.forEach((taskId) => {
      deleteTask(taskId);
    });
    this.props.deleteAllSelectedTask();

    toggleTaskDetailSection();
  }

  handleClickIncomplete() {
    this.props.selectedTaskIds.forEach((taskId) => {
      const task = this.props.tasks.find((el) => el.id === taskId);
      task.completed = false;
      this.props.updateTask(task);
    });

    toggleTaskDetailSection();
  }

  handleClickComplete() {
    this.props.selectedTaskIds.forEach((taskId) => {
      const task = this.props.tasks.find((el) => el.id === taskId);
      task.completed = true;
      this.props.updateTask(task);
    });

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

  renderTaskCreate() {
    if (this.props.showCompleted) {
      return (
        <div className='task-bar-repalcement'></div>
      );
    } else {
      return (
        <TaskCreateContainer />
      );
    }
  }

  renderTaskCompleteButtons() {
    // if ()
    return (
      <div
        className='task-complete-button'
        id='task-complete-button'
        onClick={this.handleClickComplete}>
        <i className='material-icons task-done-icon' >
          done
        </i>
      </div>
    );
  }

  renderTaskNotCompleteButtons() {
    return (
      <div
        className='task-not-complete-button'
        id='task-not-complete-button'
        onClick={this.handleClickIncomplete}>
        <i className="material-icons task-not-done-icon">
          reply
        </i>
      </div>
    );
  }

  renderDeleteTaskDropDown() {
    if (this.props.selectedTaskIds.length > 0) {
      return (
        <div
          className='task-drop-down hidden hover-able'
          id='task-drop-down'>
          <p
            className='delete-task'
            onClick={this.handleDeleteTask}>Delete Task
          </p>
        </div>
      );
    } else {
      return (
        <div
          className='task-drop-down hidden'
          id='task-drop-down'>
          <p
            className='delete-task disabled'>
            Delete Task
          </p>
        </div>
      );
    }
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
            className='task-option-button'
            id='task-option-button'
            onClick={ this.toggleTaskOption }>
            <i className="material-icons more-horiz">more_horiz</i>
            <i className="material-icons arrow-drop-down">
              arrow_drop_down
            </i>
          </div>
          {this.renderDeleteTaskDropDown()}
          {(this.props.showCompleted) ? this.renderTaskNotCompleteButtons() : this.renderTaskCompleteButtons()}
        </div>
        {this.renderTaskCreate()}
        <div className='tasks-index-div'>
          <TaskIndexContainer />
        </div>
      </div>
    );
  }
}

export default TaskNav;
