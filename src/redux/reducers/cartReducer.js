import {
  ADD_PRODUCT,
  CALC_PRODUCT_PRICE,
  CALC_TOTAL_PRICE,
  CLEAR_CART,
  DECREMENT_PRODUCT_AMOUNT,
  EDIT_PRODUCT,
  INCREMENT_PRODUCT_AMOUNT,
  REMOVE_PRODUCT,
} from '../actions/types';

const initialState = {
  products: [],
  price: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case CALC_PRODUCT_PRICE:
      return {
        ...state,
        products: state.products.map((product) =>
          product.orderId === action.payload
            ? {
                ...product,
                priceTotal: Number((product.amount * product.price).toFixed(2)),
              }
            : product,
        ),
      };
    case CALC_TOTAL_PRICE:
      return {
        ...state,
        price: state.products.reduce(
          (result, { priceTotal }) => Number((result + priceTotal).toFixed(2)),
          0,
        ),
      };
    case CLEAR_CART:
      return initialState;
    case DECREMENT_PRODUCT_AMOUNT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.orderId === action.payload
            ? {
                ...product,
                amount: product.amount - 1,
              }
            : product,
        ),
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.orderId === action.payload.orderId ? action.payload : product,
        ),
      };
    case INCREMENT_PRODUCT_AMOUNT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.orderId === action.payload
            ? {
                ...product,
                amount: product.amount + 1,
              }
            : product,
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.orderId !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
