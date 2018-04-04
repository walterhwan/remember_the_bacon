import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  handleDemoLogin(e) {
    const demoUser = {
      username: 'demo',
      password: 'demodemo'
    };
    this.props.login(demoUser)
      .then(() => this.props.history.push('/'));
  }

  renderErrorMessage() {
    const errorMessage = this.props.errors.responseJSON;
    if (errorMessage) {
      return (
        <div className='error-message'>
          <p>Sorry, that wasn't a valid login. Please try again. If you've forgotten your password, you can always reset it.</p>
        </div>
      );
    }
  }

  render() {
    const user = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className='session-form'>
        <h3>Been here before? Welcome back!</h3>
        {this.renderErrorMessage()}
        <input
          type='text'
          onChange={this.update('username')}
          value={user.username}
          placeholder="Email or username">
        </input>
        <input
          type='password'
          onChange={this.update('password')}
          value={user.password}
          placeholder="Password">
        </input>
        <input
          className='submit'
          type='submit'
          value='Log in'/>
        <input
          className='demo'
          type='button'
          value='Demo Login'
          onClick={this.handleDemoLogin}/>
      </form>
    );
  }

}

export default LoginForm;
