import React from 'react';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListTasks(this.props.listId);
    this.props.history.listen((location, action) => {
      this.props.fetchListTasks(this.props.listId);
    });
  }

  getDerivedStateFromProps() {
    debugger;
  }

  renderTaskItem(task) {
    return (
      <li className='task-item' key={`tasks-${task.id}`}>
        <div className='task-white-space'> </div>
        <div className='task-divider'></div>
        <div className={`task-check-box-${task.id}`}>
          <i className="material-icons">crop_din</i>
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
