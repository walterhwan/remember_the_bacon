import React from 'react';

class ListDetail extends React.Component {
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
