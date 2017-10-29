import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse bg-faded justify-content-between flex-nowrap flex-row">
        <a href="/" className="navbar-brand">NightLife</a>
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link pr-3" href="#" id="search-button"><i className="fa fa-search" aria-hidden="true"></i></a>
            <form className="app-search search-toggle">
              <input type="text" className="form-control" placeholder="Search City"/>
            </form>
          </li>
          <li className="nav-item">
            <a className="btn btn-login" href="#">Login</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;