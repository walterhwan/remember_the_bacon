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

    return (
      <section className='details-section'>
        <div className='list-name-div'>{list.name}</div>
        <div className='list-detail-div'>
          <div className='list-num-task detail-item'>
            <p className='num'>{list.task_ids.length}</p>
            <p className='type'>task</p>
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
      </section>
    );
  }
}

export default ListDetail;
