import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from '../actions/types';

const initialState = {
  data: null,
  error: null,
  loading: false
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return {...state, loading: true}
    case FETCH_MENU_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case FETCH_MENU_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};

export default menuReducer;
