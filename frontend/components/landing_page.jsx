import React from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.interval = undefined;
  }

  componentDidMount() {
    this.applySetInteval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  applySetInteval() {
    window.backgroundIdx = 0;
    this.interval = setInterval(function() {
      const colorArr = ['#0063BA', '#0095ED', '#6950A1', '#44B659'];
      const colorIdx = window.backgroundIdx % 4;
      const landingNav = document.getElementById('landing-nav');
      const landingMain = document.getElementById('landing-main');
      landingNav.style.backgroundColor = colorArr[colorIdx];
      landingMain.style.backgroundColor = colorArr[colorIdx];

      window.backgroundIdx += 1;
    }, 5000);
  }

  render() {
    return (
      <div className='landing-page'>
        <nav className='landing-nav'
          id='landing-nav'>
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
        <main className='landing-main'
          id='landing-main'>
          <div className='quote-signup-div'>
            <h1>The smart to-do app for lazy people.</h1>
            <Link
              type='button'
              to='/signup'>Sign Up Free</Link>
          </div>
          <div className='silder-div'>
            <img src='/lazy.svg' />
            <div className='svg-author'>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        </main>
        <footer className='landing-footer'>
          <p>
            <a href='https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/'>
              About Me
            </a>&nbsp;&nbsp;&nbsp;
            <a href='https://github.com/walterhwan'>
              Github
            </a>
          </p>
          <p>This website was made in 11 days</p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
