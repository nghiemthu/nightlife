import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/index';

class Header extends React.Component {
  
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
                  <input type="text" className="form-control input-visible" placeholder="Search City"></input> 
                  <Link to={`/results`}>
                    <button type="button" className="btn btn-search" >Search</button>
                  </Link>
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