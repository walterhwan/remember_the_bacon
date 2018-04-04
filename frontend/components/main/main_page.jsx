import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session/logout_container';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <p>THIS IS THHHHHHHHHHE MAIN PAGE</p>
        <LogoutContainer />
      </div>
    );
  }
}

export default MainPage;
