import React from 'react';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchListTasks(this.props.listId)
      .then(() => this.setState(this.props.tasks));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.props.fetchListTasks(nextProps.match.params.listId);
    }
  }

  renderTaskItem(task) {
    return (
      <li
        className='task-item'
        key={`tasks-${task.id}`}
        onClick={() => console.log('clicked')} >
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
