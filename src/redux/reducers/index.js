import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import detailsReducer from './detailsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  details: detailsReducer,
  menu: menuReducer,
});

export default rootReducer;
