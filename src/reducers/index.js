import { combineReducers } from 'redux';

import event from './event';
import user from './user';

const rootReducer = combineReducers({
  event,
  user
});

export default rootReducer;