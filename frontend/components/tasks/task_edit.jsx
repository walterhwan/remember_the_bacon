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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.task;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
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

  render() {
    const task = this.props.task;
    return (
      <div className='task-details-section'>
        <form
          className='task-details'
          onSubmit={this.handleSubmit}>
          <input
            className='task-description'
            value={this.state.description}
            onChange={this.update('description')} />
          <div className='task-estimate'>
            <label
              htmlFor='task-estimate'>estimate
            </label>
            <select
              id='task-estimate'
              value={this.state.estimate || ''}
              onChange={this.update('estimate')}>
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
              htmlFor="task-completed">completed
            </label>
            <input
              type="checkbox"
              id="task-completed"
              name="subscribe"
              value={this.state.completed}
              checked={this.state.completed}
              onChange={this.update('completed')} />
          </div>
        </form>
      </div>
    );
  }
}
// <label
//   htmlFor='task-estimate'>estimate
// </label>
// <input
//   id="task-estimate"
//   value={estTimeInText || ''}
//   onChange={this.update('estimate')}/>
// <DatePicker
//   selected={this.state.date}
//   onChange={this.handleChange} />

export default TaskCreate;
