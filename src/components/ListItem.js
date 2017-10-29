import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class ListItem extends React.Component {
  
  componentDidMount = () => {

  }
  
  renderCatogoryWrap = (categories) => categories.map(category => 
    <div className='catogory' key={category.alias}>{category.title}</div>);

  render() {
    
    const {data} = this.props;
    
    return (
      <div className='item'>
        <div className='item-header'>
          <a href={data.url} className="link name">{data.name}</a> 
          <span className="isClose"> 0 going</span>
        </div>
        <div className='catogory-wrap'>
          {this.renderCatogoryWrap(data.categories)}
        </div>
        <div className="row item-content">
          <div className="col-md-2 col-xs-12">
            <div className='img-wrap'>
              <img src={data.image_url} alt="user" className="img-responsive rounded"/>
            </div>
          </div>
          <div className="col-md-10 col-xs-12 review">
            <div className="row">
              <div className="col-2 col-md-1">
                <div className='img-wrap rounded-circle'>
                  <img src={(data.review) ? data.review.user.image_url: null} className=""/>
                </div>
              </div>
              <div className="col-10 review-text">
                <p>{(data.review) ? data.review.text : 'loading'}</p> 
              </div>
            </div>
            <a href="#" className="btn">Add To My List</a>
          </div>
        </div>
        <div className="status"> 
          <span className="">{data.review_count + ' reviews'}</span> 
          <span className="">
            <i className="fa fa-star text-warning"></i>{" " + data.rating}
          </span> 
          <span className="">{data.price}</span> 
        </div>
        <hr/>
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(ListItem);

