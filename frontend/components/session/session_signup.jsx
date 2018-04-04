import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';


class SessionSignup extends React.Component {
  render() {
    return (
      <div>
        <section className='session-left'>
          <p>LEFT</p>
        </section>
        <section className='session-right'>
          <SignupFormContainer />
        </section>
      </div>
    );
  }
}

export default SessionSignup;
