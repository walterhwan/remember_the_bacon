import React from 'react';
import { Link } from 'react-router-dom';

class SettingsButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.applyBlurCloseDropDownListener();
    this.applyHoverSettingButtonListener();
  }

  applyHoverSettingButtonListener() {
    const buttons = document.querySelectorAll(
      '.linkedin-button, .github-button, .setting-button'
    );
    for (const button of buttons) {
      const icons = button.querySelectorAll('img, i');
      button.addEventListener('mouseover', () => {
        for (const icon of icons) {
          icon.style.opacity = 1;
        }
      });
      button.addEventListener('mouseout', () => {
        for (const icon of icons) {
          icon.style.opacity = 0.7;
        }
      });
    }
  }

  applyBlurCloseDropDownListener() {
    const settingsDropDown = document.getElementById('settings-drop-down');
    document.getElementById('main-page-div').addEventListener('click', (e) => {
      settingsDropDown.classList.add('hidden');
    });
  }

  handleSettingOnClick(e) {
    e.stopPropagation();
    const settingsDropDown = document.getElementById('settings-drop-down');
    if (settingsDropDown.classList.contains('hidden')) {
      settingsDropDown.classList.remove('hidden');
    } else {
      settingsDropDown.classList.add('hidden');
    }
  }

  handleLogout() {
    this.props.logout();
    // this.props.history.push('/');
  }

  render() {
    const user = this.props.currentUser;
    return (
      <div className='logout-div'>
        <a
          className='linkedin-button'
          href='https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/'>
          <img
            className='linkedin-icon'
            src="linkedin.png"/>
        </a>
        <a
          className='github-button'
          href='https://github.com/walterhwan'>
          <img
            className='github-icon'
            src="github.png" />
        </a>
        <div
          className='setting-button'
          onClick={this.handleSettingOnClick}>
          <i className="material-icons settings-icon">
            settings
          </i>
          <i className="material-icons arrow-drop-down">
            arrow_drop_down
          </i>
        </div>
        <div
          className='settings-drop-down hidden'
          id='settings-drop-down'>
          <div className='user-info'>
            <p>
              <span>{user.first_name} {user.last_name}</span>
            </p>
            <p>{user.email}</p>
          </div>
          <div className='user-session'>
            <input
              className='user-logout-button'
              type='button'
              value='Sign out'
              onClick={this.handleLogout} />
          </div>
        </div>

      </div>
    );
  }
}

export default SettingsButton;
