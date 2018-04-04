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
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Been here before? Welcome back!</p>
          <input
            type='text'
            onChange={this.update('username')}
            value={user.username}>
          </input>
          <input
            type='password'
            onChange={this.update('password')}
            value={user.password}>
          </input>
          <input type='submit' value='Log in'/>
        </form>
      </div>
    );
  }

}

export default LoginForm;
