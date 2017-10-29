import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/index';
import {getCoordByCity} from '../lib/utils';

class Header extends React.Component {
  
  static contextTypes = {
    router: PropTypes.object
  }
  
  componentDidMount = () => {
    this.setState({term: this.props.term || ''});
  }
  
  state = {
    term: ''
  }
  
  handleChange = (event) => {
    this.setState({term: event.target.value});
  }
  
  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      this.onSubmit();
    }
  }
  
  onSubmit = (event) => {
    if (!this.state.term) return;
    
    window.localStorage.lastTerm = this.state.term;
    this.context.router.history.push('/results');
    getCoordByCity(this.state.term, (location) => this.props.actions.fetchEvents(location));
    this.props.actions.searchNighLife({term: this.state.term});
  }
  
  render() {
    return (
      <header className="header">
        <div className='background'></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="heading-content">
                <h1>NightLife</h1>
                <div className="line"></div>
                <form className="app-search main-search">
                  <input type="text" className="form-control input-visible" placeholder="Search City"
                    value={this.state.term} onChange={this.handleChange} onKeyPress={this.handleKeyPress}
                  /> 
                  <button type="button" className="btn btn-search" onClick={this.onSubmit}>Search</button>
                </form>     
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(Header);