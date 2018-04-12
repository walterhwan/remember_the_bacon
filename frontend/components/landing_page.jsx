import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing_page'>
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
                  to='/signup'>Sign up for free</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className='quote-signup-div'>
            <h1>The smart to-do app for lazy people.</h1>
            <Link
              type='button'
              to='/signup'>Sign Up Free</Link>
          </div>
          <div className='silder-div'>
          </div>
        </main>
        <footer className='footer'>
          <p>
            <a href='https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/'>
              About Me
            </a>&nbsp;&nbsp;&nbsp;
            <a href='https://github.com/walterhwan'>
              My Github
            </a>
          </p>
          <p>This website was made in 11 days</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
