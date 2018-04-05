import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className='main-page-nav'>
          <div className='menu-icon-div'>
            <i class="material-icons">menu</i>
          </div>
          <form>
            <i class="material-icons search-icon">search</i>
            <input type='search' />
          </form>
          <LogoutContainer />
        </nav>
        <main className='main-page-main'>
          <nav className='side-lists-nav'>
            <Link to='/' className='logo'/>
            <ul>
              <li>All Tasks</li>
            </ul>
          </nav>
          <section className='tasks-list-section'>
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
