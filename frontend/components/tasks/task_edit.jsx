import React from 'react';
import { toggleTaskDetailSection } from '../../util/css_util.jsx';

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
    const taskDescription = document.getElementById('task-description');
    taskDescription.blur();

    this.props.updateTask(this.state).then((action) => {
      this.props.fetchList(action.task.list_id);
    });
  }

  handleUpdateComplete(e) {
    const newState = Object.assign({}, this.state, {completed: e.target.checked});
    
    this.props.updateTask(newState).then((action) => {
      this.props.fetchList(action.task.list_id);
    });

    toggleTaskDetailSection();
  }

  handleUpdateEstimate(e) {
    const newState = Object.assign({}, this.state, {estimate: e.target.value});

    this.props.updateTask(newState).then((action) => {
      this.props.fetchList(action.task.list_id);
    });
  }


  render() {
    const task = this.props.task;
    return (
      <div
        id='task-details-section'
        className='task-details-section hidden-task-details'>
        <div
          type='button'
          className='close-task-detail-button'
          onClick={toggleTaskDetailSection}>
          close x
        </div>
        <form
          className='task-details'
          onSubmit={this.handleSubmit}>

          <div className='task-description-div'>
            <div className='divider'></div>
            <input
              className='task-description'
              id='task-description'
              value={this.state.description}
              onChange={this.update('description')}
              onBlur={this.handleSubmit}/>
          </div>
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
              <option value="120">2 hour</option>
              <option value="180">3 hour</option>
              <option value="240">4 hour</option>
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
