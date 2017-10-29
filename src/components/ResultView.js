import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions         from '../actions/index';
import Footer               from './Footer';
import ResultList           from './ResultList';
import Navbar               from './Navbar';

class ResultView extends React.Component {
  
  componentDidMount = () => {
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <ResultList />
        <Footer isDark />
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(ResultView);

