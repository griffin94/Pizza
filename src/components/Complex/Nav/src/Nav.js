import React from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'components';
import useNav from './useNav';
import { cx } from 'utils';
import cs from './Nav.module.scss';

const Nav = ({ children }) =>
	(({ toggle, open }) => (
		<nav className={cx(cs.container)}>
			<Button.Icon onClick={toggle} className={cx(cs.button)}>
				<FaTimes
					className={cx(cs.icon, cs.closeIcon, open ? cs.open : cs.close)}
				/>
				<FaBars
					className={cx(cs.icon, cs.openIcon, open ? cs.open : cs.close)}
				/>
			</Button.Icon>
			<ul className={cx(cs.list, open && cs.open)}>{children}</ul>
		</nav>
	))(useNav());

Nav.propTypes = {
	children: PropTypes.node,
};

export default Nav;
