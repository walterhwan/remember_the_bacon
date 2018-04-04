import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className='main-page-nav'>
          <input type='button' value='Menu' />
          <form>
            <input type='search' />
          </form>
          <LogoutContainer />
        </nav>
        <main className='main-page-main'>
          <nav className='side-lists-nav'>
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

export default MainPage;
