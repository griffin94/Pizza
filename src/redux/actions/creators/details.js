import {
	FETCH_DETAILS_REQUEST,
	FETCH_DETAILS_SUCCESS,
	FETCH_DETAILS_FAILURE,
} from '../types';

export const fetchDetailsRequest = () => ({ type: FETCH_DETAILS_REQUEST });

export const fetchDetailsSuccess = (cacheKey, payload = null) => ({
	type: FETCH_DETAILS_SUCCESS,
	payload: {
		[cacheKey]: payload,
	},
});

export const fetchDetailsFailure = (payload = null) => ({
	type: FETCH_DETAILS_FAILURE,
	payload,
});

export const fetchDetailsData = (cacheKey) => {
	return (dispatch) => {
		dispatch(fetchDetailsRequest());
		fetch('/product-init.json')
			.then((response) => response.json())
			.then(({ data }) => dispatch(fetchDetailsSuccess(cacheKey, data)))
			.catch((error) => dispatch(fetchDetailsFailure(error)));
	};
};
