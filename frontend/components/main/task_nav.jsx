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
        <TaskCreateContainer />
        <TaskIndexContainer />
      </div>
    );
  }
}

export default TaskNav;
