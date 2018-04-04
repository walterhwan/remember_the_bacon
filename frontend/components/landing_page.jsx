import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <nav className='landing-nav'>
          <div >
            <Link to='/' className='logo'/>
            <ul className='landing-nav-ul'>
              <li>
                <Link
                  className='link-nav'
                  to='/login'>
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  className='link-nav sign-up'
                  to='/signup'>
                  Sign up for free
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <h1>Get reminded, anywhere.</h1>
        </main>
        <footer>
          <h1>footer</h1>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
