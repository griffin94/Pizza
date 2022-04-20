import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  details: detailsReducer,
});

export default rootReducer;
