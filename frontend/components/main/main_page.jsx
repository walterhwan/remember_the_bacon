import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';
import TaskNavContainer from './tasks_nav_container';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className='main-page-nav'>
          <div className='menu-icon-div'>
            <i className="material-icons">menu</i>
          </div>
          <form>
            <i className="material-icons search-icon">search</i>
            <input type='search' />
          </form>
          <LogoutContainer />
        </nav>
        <main className='main-page-main'>
          <nav className='side-lists-nav'>
            <div className='logo'/>
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
