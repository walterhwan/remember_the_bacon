import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <nav className='landing-nav'>
          <div >
            <a className='logo'/>
            <ul className='landing-nav-ul'>
              <li>
                <a className='link-nav'>Log in</a>
              </li>
              <li>
                <a className='link-nav sign-up'>Sign up for free</a>
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
