import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../../constans';
import { addProduct, incrementProductAmount } from 'redux/actions/creators';

const useMenu = () => {
  const menu = useSelector((state) => state.menu.data);
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const actions = {
    chooseProduct: (category) =>
      category === CATEGORIES.PIZZA
        ? (id) => navigate(id)
        : (id) => {
            const isProductExistingInCart = products.some(
              (product) => product.id === id,
            );
            isProductExistingInCart
              ? dispatch(incrementProductAmount(id))
              : (() => {
                  const { image, name, price } = menu[category].find(
                    (product) => product.id === id,
                  );
                  dispatch(
                    addProduct({
                      amount: 1,
                      id,
                      image,
                      name,
                      orderId: id,
                      price,
                      priceTotal: price,
                    }),
                  );
                })();
          },
  };

  return actions;
};

export default useMenu;
