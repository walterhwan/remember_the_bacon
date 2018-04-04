import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container.jsx';


class SessionLogin extends React.Component {
  render() {
    return (
      <div>
        <section className='session-left'>
          <p>LEFT</p>
        </section>
        <section className='session-right'>
          <LoginFormContainer />
        </section>
      </div>
    );
  }
}

export default SessionLogin;
