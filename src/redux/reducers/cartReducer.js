import {
	ADD_PRODUCT,
	DECREMENT_PRODUCT_AMOUNT,
	INCREMENT_PRODUCT_AMOUNT,
	REMOVE_PRODUCT,
} from '../actions/types';

const initialState = {
	products: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return { ...state, products: [...state.products, action.payload] };
		case DECREMENT_PRODUCT_AMOUNT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload
						? { ...product, amount: product.amount - 1, priceTotal: (product.amount - 1) * product.price }
						: product,
				),
			};
		case INCREMENT_PRODUCT_AMOUNT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload
						? { ...product, amount: product.amount + 1, priceTotal: (product.amount + 1) * product.price }
						: product,
				),
			};
		case REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload,
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
