import PropTypes from 'prop-types';
import Dish from './src/Dish';
import Item from './src/Item';

const Dishes = ({ data }) =>
	data
		? Object.keys(data).map((category, idx) => (
				<Dish category={category} key={idx}>
					{data[category].map((dish, idx) => (
						<Item {...dish} key={idx} />
					))}
				</Dish>
		  ))
		: null;

Dishes.propTypes = {
	data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

export default Dishes;
