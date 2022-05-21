import React from 'react';
import PropTypes from 'prop-types';
import cs from './src/Counter.module.scss';
import { cx } from 'utils';

const Counter = ({ count = 0, className, decrement, increment, max, min }) => {
	const disableDecrement = min !== undefined && min === count;
	const disableIncrement = max !== undefined && max === count;

	return (
		<div className={cx(className, cs.container)}>
			<button
				className={cx(cs.button)}
				disabled={disableDecrement}
				onClick={disableDecrement ? undefined : decrement}
        type='button'
			>
				-
			</button>
			<span className={cx(cs.count)}>{count}</span>
			<button
				className={cx(cs.button)}
				disabled={disableIncrement}
				onClick={disableIncrement ? undefined : increment}
        type='button'
			>
				+
			</button>
		</div>
	);
};

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	className: PropTypes.string,
	decrement: PropTypes.func.isRequired,
	increment: PropTypes.func.isRequired,
	max: PropTypes.number,
	min: PropTypes.number,
};

export default Counter;
