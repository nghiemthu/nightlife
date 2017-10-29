import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';
import { getCoordByCity } from '../lib/utils';


class Navbar extends React.Component {
  
  static contextTypes = {
    router: PropTypes.object
  }
  
  componentDidMount = () => {
    this.setState({term: this.props.event.term || ''});
  }
  
  state = {
    toggle: false,
    term: ''
  }
  
  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      this.setState({toggle: false});
      this.onSubmit();
    }
  }
  
  handleChange = (event) => {
    this.setState({term: event.target.value});
  }
  
  onSubmit = () => {
    if (!this.state.term) return;
  
    window.localStorage.lastTerm = this.state.term;
    getCoordByCity(this.state.term, (location) => this.props.actions.fetchEvents(location));
    this.props.actions.searchNighLife({term: this.state.term});
  }
  
  renderLogin = () => {
    if (!this.props.user.username)
      return <li className="nav-item">
        <a className="btn btn-login" href="/auth/twitter">Login</a>
      </li>;
      
    return <li className="nav-item username">
      <a className="" href="/logout">{this.props.user.username} <i className="fa fa-sign-out" aria-hidden="true"></i></a>
    </li>;
  }
  
  toggleSearch = () => {
    this.setState({toggle: !this.state.toggle});
  }
  
  render() {
    
    const inputClass = (this.state.toggle) ? 'form-control input-visible' : 'form-control';
    
    return (
      <nav className="navbar navbar-inverse bg-inverse bg-faded justify-content-between flex-nowrap flex-row">
        <a href="/" className="navbar-brand">NightLife</a>
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link pr-3" href="#" id="search-button" 
              onClick={this.toggleSearch}
            ><i className="fa fa-search" aria-hidden="true"></i></a>
            <form className="app-search search-toggle">
              <input type="text" className={inputClass} placeholder="Search City"
                value={this.state.term} onChange={this.handleChange} onKeyPress={this.handleKeyPress}
              />
            </form>
          </li>
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
)(Navbar);


