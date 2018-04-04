import React from 'react';

class LogoutButton extends React.Component {
  render() {
    return (
      <input
        type='button'
        value='Sign out'
        onClick={() => this.props.logout()} />
    );
  }
}

export default LogoutButton;
