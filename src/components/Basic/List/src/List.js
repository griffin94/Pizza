import React from 'react';
import PropTypes from 'prop-types';
import cs from './List.module.scss';
import { cx } from 'utils';

const List = ({ children, className }) => {
	return <ul className={cx(className, cs.list)}>{children}</ul>;
};

List.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default List;
