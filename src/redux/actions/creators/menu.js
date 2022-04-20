import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from '../types';

export const fetchMenuRequest = () => ({ type: FETCH_MENU_REQUEST });

export const fetchMenuSuccess = (payload = null) => ({
  type: FETCH_MENU_SUCCESS,
  payload,
});

export const fetchMenuFailure = (payload = null) => ({
  type: FETCH_MENU_FAILURE,
  payload,
});

export const fetchMenuData = () => {
  return (dispatch) => {
    dispatch(fetchMenuRequest());
    fetch('/menu.json')
      .then((response) => response.json())
      .then(({ data }) => dispatch(fetchMenuSuccess(data)))
      .catch((error) => dispatch(fetchMenuFailure(error)));
  };
};
