import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../../constans';
import { addProduct } from 'redux/actions/creators';

const useMenu = () => {
  const menu = useSelector((state) => state.menu.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const actions = {
    chooseProduct: (category) =>
      category === CATEGORIES.PIZZA
        ? (id) => navigate(id)
        : (id) => {
            const [product] = menu[category].filter(
              (product) => product.id === id,
            );
            dispatch(
              addProduct({
                ...product,
                amount: 1,
              }),
            );
          },
  };

  return actions;
};

export default useMenu;
