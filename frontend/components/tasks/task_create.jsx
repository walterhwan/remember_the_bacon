import React from 'react';

const applyCreateTaskOnFocusEvents = () => {
  let taskBar = document.getElementsByClassName('task-bar')[0];
  let taskBarInput = document.getElementsByClassName('task-create')[0];

  taskBarInput.addEventListener("focus", function () {
    taskBar.classList.add('extend');
  });

  taskBarInput.addEventListener("focusout", function () {
    setTimeout(function () {
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
    return this.setState({list_id: nextProps.match.params.listId});
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
        onSubmit={this.handleSubmit}>
        <input
          className='task-create'
          type="text"
          placeholder="Add a task..."
          value={this.state.description}
          onChange={this.update('description')}/>
        <div className="task-util-bar">
          <div className=""></div>
          <input
            type="submit"
            value="Add Task" >
          </input>
        </div>
      </form>
    );
  }
}

export default TaskCreate;
