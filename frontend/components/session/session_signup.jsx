import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';


class SessionSignup extends React.Component {
  render() {
    return (
      <main className='session-main'>
        <section className='session-left'>
          <div className='container'>
            <Link to='/' className='logo'/>
          </div>
        </section>
        <section className='session-right'>
          <div className='container'>
            <Link to='/login'>Log in</Link>
            <SignupFormContainer />
          </div>
        </section>
      </main>
    );
  }
}

export default SessionSignup;
