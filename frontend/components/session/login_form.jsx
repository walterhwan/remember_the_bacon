import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    const user = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className='session-form'>
        <h3>Been here before? Welcome back!</h3>
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
        <input className='submit' type='submit' value='Log in'/>
      </form>
    );
  }

}

export default LoginForm;
