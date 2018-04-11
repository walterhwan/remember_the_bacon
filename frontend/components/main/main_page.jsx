import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';
import TaskNavContainer from '../tasks/tasks_nav_container';
import ListIndexContainer from '../lists/list_index_container';
import ListCreateContainer from '../lists/list_create_container';
import ListUpdateContainer from '../lists/list_update_container';
import ListDetailContainer from '../lists/list_detail_container';
import TaskEditContainer from '../tasks/task_edit_container';
import TaskSearchContainer from '../tasks/task_search_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // <i class="material-icons">done</i>
  // <i class="material-icons">add_box</i>
  // <i class="material-icons">check_box</i>
  // <i class="material-icons">check_box_outline_blank</i>

  handleMenuOnClick(e) {
    const menuIconDiv = document.getElementById('menu-icon-div');
    if (menuIconDiv.classList.contains('extend')) {
      menuIconDiv.classList.remove('extend');
    } else {
      menuIconDiv.classList.add('extend');
    }

    const sideListNav = document.getElementById('side-lists-nav');
    if (sideListNav.classList.contains('extend')) {
      sideListNav.classList.remove('extend');
    } else {
      sideListNav.classList.add('extend');
    }

    const section = document.getElementById('task-list-details-section');
    if (section.classList.contains('extend')) {
      section.classList.remove('extend');
    } else {
      section.classList.add('extend');
    }

    const searchForm = document.getElementById('search-form');
    if (searchForm.classList.contains('extend')) {
      searchForm.classList.remove('extend');
    } else {
      searchForm.classList.add('extend');
    }

  }

  render() {
    return (
      <div className='main-page-div'>

        <div className='modal-screen modal'></div>
        <ListCreateContainer />
        <ListUpdateContainer />

        <nav className="main-page-nav">
          <div
            className="menu-icon-div"
            id="menu-icon-div"
            onClick={ this.handleMenuOnClick }>
            <i
              className="material-icons menu-icon">
              menu
            </i>
            <p className='menu-text'>Lists</p>
          </div>
          <TaskSearchContainer />
          <LogoutContainer />
        </nav>
        <main className="main-page-main">
          <nav
            className="side-lists-nav"
            id='side-lists-nav'>
            <div className="logo"/>
            <ListIndexContainer />
          </nav>
          <div
            className='task-list-details-section'
            id='task-list-details-section'>
            <section className='tasks-nav-section'>
              <TaskNavContainer />
            </section>
            <ListDetailContainer />
            <TaskEditContainer />
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
