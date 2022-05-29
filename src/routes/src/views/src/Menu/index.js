import PropTypes from 'prop-types';
import { Products } from 'components';
import { withLoader } from 'components/HOC';
import useMenu from './src/useMenu';

const Menu = ({ data }) =>
  (({ chooseProduct }) =>
    Object.entries(data).map(([category, products]) => (
      <Products category={category} key={category}>
        {products.map((product) => (
          <Products.Item
            key={product.id}
            category={category}
            onClick={chooseProduct}
            {...product}
          />
        ))}
      </Products>
    )))(useMenu());

Menu.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

export default withLoader(Menu);
