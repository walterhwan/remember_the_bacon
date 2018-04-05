import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import generateQuote from '../../util/quote_util';

class SessionLogin extends React.Component {
  renderQuote() {
    const quote = generateQuote();
    return (
      <div>
        <p
          className='quote-text'>"{quote.text}"
        </p>
        <p
          className='quote-author'>- {quote.author}
        </p>
      </div>
    );
  }

  render() {
    return (
      <main className='session-main'>
        <section className='session-left'>
          <div className='container'>
            <Link to='/' className='logo'/>
            {this.renderQuote()}
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
