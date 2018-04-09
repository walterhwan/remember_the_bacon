import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';
import TaskNavContainer from '../tasks/tasks_nav_container';
import ListIndexContainer from './list_index_container';
import ListCreateContainer from '../lists/list_create_container';
import ListUpdateContainer from '../lists/list_update_container';
import ListDetailContainer from '../lists/list_detail_container';
import TaskEditContainer from '../tasks/task_edit_container';

const applySearchOnFocusEvent = () => {
  let searchInput = document.getElementsByClassName('task-search')[0];
  let searchIcon = document.getElementsByClassName('search-icon')[0];
  let searchForm = document.getElementsByClassName('search-form')[0];

  searchInput.addEventListener("focus", function () {
    searchIcon.style.color = 'gray';
    searchForm.style.backgroundColor = 'white';
  });

  searchInput.addEventListener("focusout", function () {
    searchIcon.style.color = 'white';
    searchForm.style.backgroundColor = '#417CE1';
  });
};

const defaultTask = {
  list_id: '',
  description: '',
  due_date: '',
  estimate: '',
  completed: false,
};

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.selectedTasks = new Set();
  }

  componentDidMount() {
    applySearchOnFocusEvent();
  }

  // <i class="material-icons">done</i>
  // <i class="material-icons">add_box</i>
  // <i class="material-icons">check_box</i>
  // <i class="material-icons">check_box_outline_blank</i>

  render() {
    let selectedTask;
    let task = defaultTask;
    if (this.selectedTasks.size !== 0) {
      task = this.props.tasks[this.selectedTasks[0]];
    }
    // debugger;
    return (
      <div>
        <div className='modal-screen modal'></div>
        <ListCreateContainer />
        <ListUpdateContainer />
        <nav className="main-page-nav">
          <div className="menu-icon-div">
            <i className="material-icons">menu</i>
          </div>
          <form className="search-form">
            <i className="material-icons search-icon">search</i>
            <input className="task-search" type='search' />
          </form>
          <LogoutContainer />
        </nav>
        <main className="main-page-main">
          <nav className="side-lists-nav">
            <div className="logo"/>
            <ListIndexContainer />
          </nav>
          <div className='task-list-details-section'>
            <section className='tasks-nav-section'>
              <TaskNavContainer selectedTasks={this.selectedTasks}/>
            </section>
            <ListDetailContainer />
            <TaskEditContainer task={task} />
          </div>
        </main>
      </div>
    );
  }
}
// <div className='task-details-section'>
//   <div className='task-name-div'>
//     <input value='Task Name' />
//   </div>
// </div>


  // <input type='button' value='Menu' />

export default MainPage;
