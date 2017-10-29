import axios from 'axios';
import { createAction } from 'redux-actions';

import * as types from '../constants/actionTypes';

const config = {
  headers: {'Authorization': 'Bearer F2jRj105AcmbhMirfydQAGriiKiWM0SJ2LYIewez7Y8JtibYkhYnwyj_IdPQZgwrG5cZbYHcZIklBLhiSk42sQYz1ySi2ZcN3orswQD-QtfAOV738ykXVchGy-HtWXYx'}
};

export const searchNighLife			= createAction(types.SEARCH_NIGHTLIFE);

export const fetchEvents = (coord) => {
  return (dispatch) => {
  	axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=nightlife&latitude=${coord.lat}&longitude=${coord.lng}`, config)
  	  .then(res => {
  	    
  	    if (res.data.businesses.length <= 0){
  	      alert('No Bussiness Found!');
          return;
  	    }
  	    
  	    dispatch({ 
				  type: types.GET_ALL_EVENTS,
		    	payload: res.data.businesses
				});
				
				//Get Reviews
				res.data.businesses.forEach(business => 
				  axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${business.id}/reviews`, config)
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
				
				//Get member going
				res.data.businesses.forEach(business => 
				  axios.get(`/api/events/${business.id}`)
          .then(res => {
            dispatch({ 
        		  type: types.GET_MEMBER,
            	payload: {id: business.id, members: (res.data) ? res.data.members : []}
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
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/temple-nightclub-san-francisco-2/reviews`, config)
    .then(res => {
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

export const fetchUser = () => {
  return (dispatch) => {
  	axios.get('/api/user')
			.then(res => {
				dispatch({ 
				  type: types.GET_USER,
		      payload: res.data
				});
			})
			.catch((error) => {
		    console.log(error);
		  });
	};
};

export const addEvent = (id) => {
  return (dispatch) => {
  	axios.post('/api/events', {name: id})
			.then(res => {
			  
			  if (res.data.err) alert(res.data.err);

			  dispatch({ 
				  type: types.UPDATE_MEMBER,
		      payload: res.data
				});
			})
			.catch((error) => {
		    console.log(error);
		  });
	};
};

export const removeEvent = (id) => {
  return (dispatch) => {
  	axios.post('/api/events/remove', {name: id})
			.then(res => {
  		  dispatch({ 
				  type: types.UPDATE_MEMBER,
		      payload: res.data
				});
			})
			.catch((error) => {
		    console.log(error);
		  });
	};
};



