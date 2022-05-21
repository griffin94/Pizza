import React from 'react';
import PropTypes from 'prop-types';
import cs from './CartItem.module.scss';
import { cx } from 'utils';
import Counter from 'components/Basic/Counter';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from 'components';

const CartItem = ({ amount, className, decrement, details, id, image, increment, name, remove }) => (
	<li className={cx(className, cs.item)}>
		<div className={cx(cs.row)}>
			<img
				src={image}
				alt={name}
				className={cx(cs.image)}
			/>
			<div className={cx(cs.col)}>
				<h3 className={cx(cs.name)}>{name}</h3>
				<span>
					<span className={cx(cs.label)}>Rozmiar: </span>{details.size}
				</span>
				<span>
					<span className={cx(cs.label)}>Ciasto: </span>{details.dough}
				</span>
				<span>
					<span className={cx(cs.label)}>Sosy: </span>Sos pomidorowy
				</span>
				<span>
					<span className={cx(cs.label)}>Dodatkowe składniki: </span>Papryka,
					pomidor, salami, podwójny ser
				</span>
			</div>
		</div>
		<div className={cx(cs.row)}>
			<Counter
				count={amount}
				decrement={() => decrement(id)}
				increment={() => increment(id)}
				min={-1}
				max={10}
			/>
			<Button.Icon onClick={() => remove(id)}>
				<FaTrashAlt />
			</Button.Icon>
		</div>
	</li>
);

// const CartItem = (props) => {
//   console.log(props)
//   return null;
// }

CartItem.propTypes = {
	amount: PropTypes.number,
	className: PropTypes.string,
	decrement: PropTypes.func,
	id: PropTypes.string,
	image: PropTypes.string,
	increment: PropTypes.func,
	name: PropTypes.string,
	remove: PropTypes.func,
};

export default CartItem;
