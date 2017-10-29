import { handleActions } from 'redux-actions';
import * as types from '../constants/actionTypes';

const DEFAULT_ACTION = {
  data: [],
  reviews: [],
  term: ''
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
	[types.SEARCH_NIGHTLIFE]: (state, { payload }) =>({
		...state, 
		term: payload.term
	}),
	[types.GET_MEMBER]: (state, { payload }) =>({
		...state, 
		data: state.data.map((item) => {
		  if (item.id == payload.id) item.members = payload.members;
		  return item;
		})
	}),
	[types.UPDATE_MEMBER]: (state, { payload }) =>({
		...state, 
		data: state.data.map((item) => {
		  if (item.id == payload.name) item.members = payload.members;
		  return item;
		})
	}),
};

export default handleActions (
	actionsHandlers,
	DEFAULT_ACTION 
);