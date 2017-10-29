import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';
import Footer             from './Footer';
import Header             from './Header';
import MinimizedNavbar    from './MinimizedNavbar';

class App extends React.Component {
  
  componentDidMount = () => {
    this.props.actions.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <MinimizedNavbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App);


