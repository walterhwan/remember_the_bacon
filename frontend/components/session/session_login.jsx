import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';


class SessionLogin extends React.Component {
  render() {
    return (
      <main className='session-login-main'>
        <section className='session-left'>
          <div className='container'>
            <a className='logo'/>
          </div>
        </section>
        <section className='session-right'>
          <div className='container'>
            <Link to='/signup'>Sign up for free</Link>
            <LoginFormContainer />
          </div>
        </section>
      </main>
    );
  }
}

export default SessionLogin;
