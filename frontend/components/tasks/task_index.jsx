import React from 'react';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectedTasks = props.selectedTasks;

    this.handleTaskOnClick = this.handleTaskOnClick.bind(this);
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

  handleTaskOnClick(task) {
    const addSelectedTask = this.props.addSelectedTask;
    const deleteSelectedTask = this.props.deleteSelectedTask;
    return (e) => {
      const taskItem = e.currentTarget;
      if (taskItem.classList.contains('selected-task')) {
        taskItem.classList.remove('selected-task');
        // this.selectedTasks.delete(task.id);
        deleteSelectedTask(task);
      } else {
        taskItem.classList.add('selected-task');
        // this.selectedTasks.add(task.id);
        addSelectedTask(task);
      }
    };
  }

  renderTaskItem(task) {
    return (
      <li
        className='task-item'
        key={`tasks-${task.id}`}
        onClick={this.handleTaskOnClick(task)} >
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
