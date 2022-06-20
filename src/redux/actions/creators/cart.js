import {
  ADD_PRODUCT,
  CALC_PRODUCT_PRICE,
  CALC_TOTAL_PRICE,
  CLEAR_CART,
  DECREMENT_PRODUCT_AMOUNT,
  EDIT_PRODUCT,
  INCREMENT_PRODUCT_AMOUNT,
  REMOVE_PRODUCT,
} from '../types';

export const {
  addProduct,
  calcProductPrice,
  calcTotalPrice,
  clearCart,
  decrementProductAmount,
  editProduct,
  incrementProductAmount,
  removeProduct,
} = {
  addProduct: (product) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
    dispatch(calcTotalPrice());
  },
  calcProductPrice: (productID) => ({ type: CALC_PRODUCT_PRICE, payload: productID }),
  calcTotalPrice: () => ({ type: CALC_TOTAL_PRICE }),
  clearCart: () => ({ type: CLEAR_CART }),
  decrementProductAmount: (productID) => (dispatch) => {
    dispatch({ type: DECREMENT_PRODUCT_AMOUNT, payload: productID });
    dispatch(calcProductPrice(productID));
    dispatch(calcTotalPrice());
  },
  editProduct: (product) => ({ type: EDIT_PRODUCT, payload: product}),
  incrementProductAmount: (productID) => (dispatch) => {
    dispatch({ type: INCREMENT_PRODUCT_AMOUNT, payload: productID });
    dispatch(calcProductPrice(productID));
    dispatch(calcTotalPrice());
  },
  removeProduct: (productID) => (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productID });
    dispatch(calcTotalPrice());
  },
};
