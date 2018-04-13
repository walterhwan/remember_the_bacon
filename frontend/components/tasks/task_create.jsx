import React from 'react';

const applyCreateTaskOnFocusEvents = () => {
  let taskBar = document.getElementById('task-bar');
  let taskBarInput = document.getElementById('task-create');

  taskBarInput.addEventListener("focus", () => {
    taskBar.classList.add('extend');
  });

  taskBarInput.addEventListener("focusout", () => {
    setTimeout(() => {
      taskBar.classList.remove('extend');
    }, 100);
  });
};

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    applyCreateTaskOnFocusEvents();
  }

  componentWillReceiveProps(nextProps) {
    return this.setState({
      list_id: nextProps.match.params.listId
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.description.trim() !== '') {
      this.props.createTask(this.state);
    }
    this.setState(this.props.task);
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <form
        className='task-bar'
        id='task-bar'
        onSubmit={this.handleSubmit}>
        <input
          className='task-create'
          id='task-create'
          type="text"
          placeholder="Add a task..."
          value={this.state.description}
          onChange={this.update('description')}/>
        <div className="task-util-bar">
          <div className=""></div>
          <input className='add-button'
            type="submit"
            value="Add Task" >
          </input>
        </div>
      </form>
    );
  }
}

export default TaskCreate;
