import React from 'react';

class ListDetail extends React.Component {
  renderEstimatedTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    if (minutes === 0) {
      return (
        <p className='num'>
          {hours}<span>hr</span>
        </p>
      );
    } else {
      return (
        <p className='num'>
          {hours}<span>hr</span> {minutes}<span>min</span>
        </p>
      );
    }
  }

  render() {
    const list = this.props.list;
    const numTasks = list.task_ids.length - list.num_completed;

    return (
      <section className='details-section'>
        <div className='list-name-div'>{list.name}</div>
        <div className='list-detail-div'>
          <div className='list-num-task detail-item'>
            <p className='num'>{numTasks}</p>
            <p className='type'>{(numTasks < 2 ) ? 'task' : 'tasks' }</p>
          </div>
          <div className='list-est-time detail-item'>
            {this.renderEstimatedTime(list.total_estimated)}
            <p className='type'>estimated</p>
          </div>
          <div className='list-num-completed-task detail-item'>
            <p className='num'>{list.num_completed}</p>
            <p className='type'>completed</p>
          </div>
        </div>
        <footer className='list-detail-footer'>
          <p>
            <a href='https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/'>
              About Me
            </a>&nbsp;&nbsp;&nbsp;
            <a href='https://github.com/walterhwan'>
              My Github
            </a>
          </p>
          <p>This website was made in 11 days</p>
        </footer>
      </section>
    );
  }
}

export default ListDetail;
