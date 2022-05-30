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
            const [{ image, name, price }] = menu[category].filter(
              (product) => product.id === id,
            );
            dispatch(
              addProduct({
                amount: 1,
                id,
                image,
                name,
                price,
              }),
            );
          },
  };

  return actions;
};

export default useMenu;
