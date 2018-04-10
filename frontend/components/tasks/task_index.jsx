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
    // TODO: figure out what to return
    return null;
  }

  handleTaskOnClick(task) {
    const addSelectedTask = this.props.addSelectedTask;
    const deleteSelectedTask = this.props.deleteSelectedTask;
    const deleteAllSelectedTask = this.props.deleteAllSelectedTask;
    return (e) => {
      const taskItem = e.currentTarget;
      const taskItems = document.getElementsByClassName('task-item');
      const doneIcon = document.getElementById(`done-icon-${task.id}`);
      const doneIcons = document.getElementsByClassName(`done-icon`);
      if (taskItem.classList.contains('selected-task')) {
        taskItem.classList.remove('selected-task');
        doneIcon.classList.add('hidden');
        deleteSelectedTask(task);
      } else {
        for (const el of taskItems) {
          el.classList.remove('selected-task');
        }
        for (const el of doneIcons) {
          el.classList.add('hidden');
        }
        taskItem.classList.add('selected-task');
        doneIcon.classList.remove('hidden');
        deleteAllSelectedTask(task);
        addSelectedTask(task);
      }

      // task detail css animation
      const taskSection = document.getElementById('task-details-section');
      if (taskItem.classList.contains('selected-task')) {
        taskSection.classList.remove('hidden-task-details');
      } else {
        taskSection.classList.add('hidden-task-details');
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
          <i className="material-icons box-icon">crop_din</i>
          <i
            className={'material-icons done-icon hidden'}
            id={`done-icon-${task.id}`}>done</i>
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
      <ul className='task-index'>
        {
          tasks.slice().reverse().map((task)=> this.renderTaskItem(task))
        }
      </ul>
    );
  }
}

export default TaskIndex;
