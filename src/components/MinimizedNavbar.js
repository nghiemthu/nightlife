import React from 'react';

class MinimizedNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-transparent bg-faded justify-content-between flex-nowrap flex-row">
      <a href="/" className="navbar-brand"></a>
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item">
          <a className="btn btn-login" href="#">Login</a>
        </li>
      </ul>
    </nav>
    );
  }
}

export default MinimizedNavbar;