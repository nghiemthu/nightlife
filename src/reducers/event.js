import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const DEFAULT_ACTION = {
  data: [],
  reviews: []
};

const actionsHandlers = {
  [types.GET_ALL_EVENTS]: (state, { payload }) =>({
		...state, 
		data: payload
	}),
	[types.GET_REVIEW]: (state, { payload }) =>({
		...state, 
		reviews: [...state.reviews, payload],
		data: state.data.map((item) => {
		  if (item.id == payload.id) item.review = payload.review;
		  return item;
		})
	}),
};

export default handleActions (
	actionsHandlers,
	DEFAULT_ACTION 
);