import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  clearCart,
  decrementProductAmount,
  incrementProductAmount,
  removeProduct,
} from 'redux/actions/creators';
import { ROUTES } from 'routes/src/constans';

const useCart = () => {
  const { price, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const decrement = (productID) => dispatch(decrementProductAmount(productID));
  const increment = (productID) => dispatch(incrementProductAmount(productID));
  const remove = (productID) => dispatch(removeProduct(productID));
  const clear = () => dispatch(clearCart());
  const continueShopping = () => navigate(ROUTES.MENU);

  return {
    clear,
    continueShopping,
    decrement,
    increment,
    price,
    products,
    remove,
  };
};

export default useCart;
