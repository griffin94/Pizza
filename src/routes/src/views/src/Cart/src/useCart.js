import { useSelector, useDispatch } from 'react-redux';
import {
	decrementProductAmount,
	incrementProductAmount,
	removeProduct,
} from 'redux/actions/creators';

const useCart = () => {
	const products = useSelector((state) => state.cart.products);
	const dispatch = useDispatch();

	const decrement = (productID) => dispatch(decrementProductAmount(productID));
	const increment = (productID) => dispatch(incrementProductAmount(productID));
	const remove = (productID) => dispatch(removeProduct(productID));

	return {
		decrement,
		increment,
		products,
		remove,
	};
};

export default useCart;
