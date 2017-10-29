import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class MinimizedNavbar extends React.Component {
  
  renderLogin = () => {
    if (!this.props.user.username)
      return <li className="nav-item">
        <a className="btn btn-login" href="/auth/twitter">Login</a>
      </li>;
      
    return <li className="nav-item username">
      <a className="" href="/logout">{this.props.user.username} <i className="fa fa-sign-out" aria-hidden="true"></i></a>
    </li>;
  }
  
  render() {
    return (
      <nav className="navbar navbar-transparent bg-faded justify-content-between flex-nowrap flex-row">
      <a href="/" className="navbar-brand"></a>
      <ul className="nav navbar-nav flex-row">
        {this.renderLogin()}
      </ul>
    </nav>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(MinimizedNavbar);

