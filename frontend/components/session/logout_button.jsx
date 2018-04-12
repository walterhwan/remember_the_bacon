import React from 'react';
import { Link } from 'react-router-dom';

class LogoutButton extends React.Component {
  render() {
    return (
      <div className='logout-div'>
        <a href='https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/'>
          <img
            className='linkedin-icon'
            src="linkedin.png"/>
        </a>
        <a href='https://github.com/walterhwan'>
          <img
            className='github-icon'
            src="github.png" />
        </a>
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
