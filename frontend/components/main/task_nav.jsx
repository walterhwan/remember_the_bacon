import React from 'react';
import TaskIndexContainer from './task_index_container';
import TaskCreateContainer from './task_create_container';

class TaskNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='task-nav-div'>
        <div className='seperator'></div>
        <div className='task-tool-bar'>
          <div className='task-option'>
            <i className="material-icons more-horiz">more_horiz</i>
            <i className="material-icons arrow-drop-down">
              arrow_drop_down
            </i>
          </div>
        </div>
        <TaskCreateContainer />
        <TaskIndexContainer />
      </div>
    );
  }
}

export default TaskNav;
