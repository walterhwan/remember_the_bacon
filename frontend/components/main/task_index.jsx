import React from 'react';
// import { Redirect } from 'react-router-dom';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTaskIndex();
    test();
  }

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <form className='task-bar'>
          <input className='task-create' type="text" name="" value="" />
          <div className="task-util-bar">
            <div className=""></div>
            <button type="submit" name="submit">Add Task</button>
          </div>
        </form>
        <ul>
          {
            tasks.map((task)=><p
              key={`tasks-${task.id}`}>{task.description}</p>)
          }
        </ul>
      </div>
    );
  }
}

const test = () => {
  // getElementsByClassName
  // input.addEventListener("focus", function () {
  //   this.style.backgroundColor = "red";
  // });

  let taskBar = document.getElementsByClassName('task-bar')[0];
  let taskBarInput = document.getElementsByClassName('task-create')[0];

  taskBarInput.addEventListener("focus", function () {
    taskBar.style.height = '90px';
  });

  taskBarInput.addEventListener("focusout", function () {
    taskBar.style.height = '50px';
  });

  // taskBarInput.focus(function() {
  //   taskBar.css( "height", "90px" );
  // });
  // taskBarInput.focusout(() => {
  //   taskBar.css( "height", "50px" );
  // });
};

export default TaskIndex;
