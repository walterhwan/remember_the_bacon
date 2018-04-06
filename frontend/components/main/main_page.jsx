import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';
import TaskNavContainer from './tasks_nav_container';

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

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      applySearchOnFocusEvent();
  }

  render() {
    return (
      <div>
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
            <ul>
              <li>
                <i className="material-icons">
                  arrow_drop_down
                </i>
                <p onClick={()=>console.log('clicked')}>All Tasks</p>
              </li>
            </ul>
          </nav>
          <section className='tasks-list-section'>
            <TaskNavContainer />
          </section>
          <section className='details-section'>
          </section>
        </main>
      </div>
    );
  }
}


  // <input type='button' value='Menu' />

export default MainPage;
