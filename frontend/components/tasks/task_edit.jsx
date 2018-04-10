import React from 'react';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

const defaultTask = {
  list_id: '',
  description: '',
  due_date: '',
  estimate: '',
  completed: false,
};

class TaskCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

    this.handleUpdateComplete = this.handleUpdateComplete.bind(this);
    this.handleUpdateEstimate = this.handleUpdateEstimate.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.task;
  }

  update(field) {
    return (e) => {
      if (field === 'completed') {
        this.setState({[field]: e.target.checked});
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  minToText(time) {
    let hours = Math.floor( time / 60);
    let minutes = time % 60;
    if (minutes !== 0) {
      return `${hours} hours ${minutes} mins`;
    } else {
      return `${hours} hours`;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTask(this.state);
  }

  handleUpdateComplete(e) {
    const newState = Object.assign({}, this.state, {completed: e.target.checked});
    this.props.updateTask(newState);
  }

  handleUpdateEstimate(e) {
    const newState = Object.assign({}, this.state, {estimate: e.target.value});
    this.props.updateTask(newState);
  }


  render() {
    const task = this.props.task;
    return (
      <div
        id='task-details-section'
        className='task-details-section hidden-task-details'>
        <form
          className='task-details'
          onSubmit={this.handleSubmit}>
          <input
            className='task-description'
            value={this.state.description}
            onChange={this.update('description')} />
          <div className='task-estimate'>
            <label
              className='task-estimate-label'
              htmlFor='task-estimate'>estimate
            </label>
            <select
              id='task-estimate'
              value={this.state.estimate || ''}
              onChange={this.handleUpdateEstimate}>
              <option value="2">2 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">1 hour</option>
              <option value="">No estimate</option>
            </select>
          </div>
          <div className='task-completed'>
            <label
              className='task-complete-label'
              htmlFor="task-completed">completed
            </label>
            <input
              type="checkbox"
              id="task-completed"
              name="subscribe"
              value={this.state.completed.toString()}
              checked={this.state.completed}
              onChange={this.handleUpdateComplete} />
          </div>
        </form>
      </div>
    );
  }
}
// <DatePicker
//   selected={this.state.date}
//   onChange={this.handleChange} />

export default TaskCreate;
