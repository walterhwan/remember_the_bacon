import React from 'react';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTaskIndex();
  }

  renderTaskItem(task) {
    return (
      <li className='task-item' key={`tasks-${task.id}`}>
        <div className='task-white-space'> </div>
        <div className='task-divider'></div>
        <div className={`task-check-box-${task.id}`}>
          <i className="fa fa-square-o" aria-hidden="true"></i>
        </div>
        <p>
          {task.description}
        </p>
      </li>
    );
  }

  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {
          tasks.map((task)=> this.renderTaskItem(task))
        }
      </ul>
    );
  }
}

export default TaskIndex;
