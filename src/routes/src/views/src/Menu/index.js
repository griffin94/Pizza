import PropTypes from 'prop-types';
import { Products } from 'components';
import { withLoader } from 'components/HOC';

const Menu = ({ data }) =>
  data
    ? Object.entries(data).map(([category, products]) => (
        <Products category={category} key={category}>
          {products.map((product) => (
            <Products.Item key={product.id} category={category} {...product} />
          ))}
        </Products>
      ))
    : null;

Menu.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

export default withLoader(Menu);
