import React from 'react';


class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const task = this.state;
    debugger;
    return (
      <div className='task-details-section'>
        <div className='task-name-div'>
          <input value={task.description} />
          Task Details
        </div>
      </div>
    );
  }
}

export default TaskCreate;
