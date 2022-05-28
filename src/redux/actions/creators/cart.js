import {
  ADD_PRODUCT,
  DECREMENT_PRODUCT_AMOUNT,
  INCREMENT_PRODUCT_AMOUNT,
  REMOVE_PRODUCT
} from '../types';

export const {
  addProduct,
  decrementProductAmount,
  incrementProductAmount,
  removeProduct
} = {
	addProduct: (product) => ({ type: ADD_PRODUCT, payload: product }),
	decrementProductAmount: (productID) => ({ type: DECREMENT_PRODUCT_AMOUNT, payload: productID }),
	incrementProductAmount: (productID) => ({ type: INCREMENT_PRODUCT_AMOUNT, payload: productID }),
	removeProduct: (productID) => ({ type: REMOVE_PRODUCT, payload: productID }),
};
