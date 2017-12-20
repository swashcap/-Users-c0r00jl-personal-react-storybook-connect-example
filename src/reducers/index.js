import { combineReducers } from 'redux';

import analytics from './analytics';
import style from './style';

const rootReducer = combineReducers({
  analytics,
  style
});

export default rootReducer;
