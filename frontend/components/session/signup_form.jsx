import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    const user = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Sign up for free.</p>
          <input
            type='text'
            onChange={this.update('first_name')}
            value={user.first_name}>
          </input>
          <input
            type='text'
            onChange={this.update('last_name')}
            value={user.last_name}>
          </input>
          <input
            type='text'
            onChange={this.update('email')}
            value={user.email}>
          </input>
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
          <input type='submit' value='Sign up!'/>
        </form>
      </div>
    );
  }

}

export default SignupForm;
