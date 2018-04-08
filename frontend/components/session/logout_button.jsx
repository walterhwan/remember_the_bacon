import React from 'react';

class LogoutButton extends React.Component {
  render() {
    return (
      <div className='logout-div'>
        <i className="material-icons settings-icon">settings</i>
        <input
          className='logout-button'
          type='button'
          value='Sign out'
          onClick={() => this.props.logout()} />
      </div>
    );
  }
}

export default LogoutButton;
