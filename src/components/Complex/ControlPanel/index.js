import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'components';
import cs from './src/ControlPanel.module.scss';
import { cx } from 'utils';
import { FaMoon, FaSun, FaShoppingCart } from 'react-icons/fa';
import { useTheme } from 'hooks';
import { ROUTES } from 'routes';

const ControlPanel = () => {
	const { theme, toggleTheme } = useTheme();
	const products = useSelector((state) => state.cart.products);
	const navigate = useNavigate();

	return (
		<div className={cx(cs.container)}>
			<Button.Icon
				className={cx(cs.button)}
				onClick={() => navigate(ROUTES.CART)}
			>
				<FaShoppingCart />
				{products.length > 0 && (
					<div className={cx(cs.productsCountIcon)}>{products.length}</div>
				)}
			</Button.Icon>
			<Button.Icon onClick={toggleTheme} className={cx(cs.button)}>
				<FaMoon
					className={cx(
						cs.icon,
						cs.closeIcon,
						{
							light: cs.open,
							dark: cs.close,
						}[theme],
					)}
				/>
				<FaSun
					className={cx(
						cs.icon,
						cs.openIcon,
						{
							light: cs.open,
							dark: cs.close,
						}[theme],
					)}
				/>
			</Button.Icon>
		</div>
	);
};

export default ControlPanel;
