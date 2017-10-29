import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';
import ListItem           from './ListItem';

class ResultList extends React.Component {
  
  componentDidMount = () => {
  }
  
  render() {
    return (
      <section className='main'>
        <div className="container"> 
          <h2>NightLife in {this.props.event.term}</h2>
          <hr/>
          {(this.props.event.data.length <= 0) ? <div>Loading..</div> : 
          this.props.event.data.map((item) => <ListItem data={item} key={item.id}/>)}
        </div>
      </section>

    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(ResultList);

