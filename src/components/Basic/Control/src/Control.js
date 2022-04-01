import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Control.module.scss';

const Control = ({ checked, id, label, name, onChange, type, value }) => {
	const inputRef = useRef(null);

	const checkInput = (e) => {
		e.preventDefault();
		(e.code === 'Space' || e.code === 'Enter') &&
			inputRef.current !== null &&
			inputRef.current.click();
	};

	return (
		<div
			className={cx(
				cs.container,
				{
					radio: cs.radio,
					checkbox: cs.checkbox,
				}[type],
			)}
		>
			<input
				checked={checked}
				className={cx(cs.input)}
				id={id}
				name={name}
				onChange={onChange}
				ref={inputRef}
				type={type}
				value={value}
			/>
			<label
				className={cx(cs.label)}
				htmlFor={id}
				onKeyPress={checkInput}
				tabIndex='0'
			>
				{label}
			</label>
		</div>
	);
};

Control.propTypes = {
	checked: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default Control;
