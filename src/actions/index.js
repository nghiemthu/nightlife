import axios from 'axios';
import { createAction } from 'redux-actions';

import * as types from '../constants/actionTypes';

axios.defaults.headers.common['Authorization'] = "Bearer F2jRj105AcmbhMirfydQAGriiKiWM0SJ2LYIewez7Y8JtibYkhYnwyj_IdPQZgwrG5cZbYHcZIklBLhiSk42sQYz1ySi2ZcN3orswQD-QtfAOV738ykXVchGy-HtWXYx";

export const fetchEvents = () => {
  return (dispatch) => {
  	axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=nightlife&latitude=37.786882&longitude=-122.399972')
  	  .then(res => {
  	    dispatch({ 
				  type: types.GET_ALL_EVENTS,
		    	payload: res.data.businesses
				});
				
				res.data.businesses.forEach(business => 
				  axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${business.id}/reviews`)
          .then(res => {
            dispatch({ 
        		  type: types.GET_REVIEW,
            	payload: {id: business.id, review: res.data.reviews[0]}
        		});
        	})
        	.catch((error) => {
        	   console.log(error);  
          })
				);
			})
			.catch((error) => {
  		   console.log(error);  
  	  });
	};
};

export const getReview = (id) => {
  
  return (dispatch) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/temple-nightclub-san-francisco-2/reviews`)
    .then(res => {
      console.log(res.data);
      dispatch({ 
  		  type: types.GET_REVIEW,
      	payload: {id: id, review: res.data.reviews[0]}
  		});
  	})
  	.catch((error) => {
  	   console.log(error);  
    });
	};
};