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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'));
  }

  handleDemoLogin(e) {
    const demoUser = {
      username: `demo${Math.floor(Math.random() * 20 + 1)}`,
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
          {
            errorMessage.map(e => <p>{e}</p>)
          }
        </div>
      );
    }
  }

  render() {
    const user = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className='session-form'>
          <h3>Sign up for free.</h3>
          <input
            type='text'
            onChange={this.update('first_name')}
            value={user.first_name}
            placeholder="First Name">
          </input>
          <input
            type='text'
            onChange={this.update('last_name')}
            value={user.last_name}
            placeholder="Last Name">
          </input>
          <input
            type='text'
            onChange={this.update('email')}
            value={user.email}
            placeholder="Email">
          </input>
          <input
            type='text'
            onChange={this.update('username')}
            value={user.username}
            placeholder="Username">
          </input>
          <input
            type='password'
            onChange={this.update('password')}
            value={user.password}
            placeholder="Password">
          </input>
          {this.renderErrorMessage()}
          <input type='submit' value='Sign up!'/>
          <input
            className='demo'
            type='button'
            value='Demo Login'
            onClick={this.handleDemoLogin}/>
        </form>
      </div>
    );
  }

}

export default SignupForm;
