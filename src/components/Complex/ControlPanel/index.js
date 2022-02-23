import React, { useState } from 'react';
import { Button } from 'components';
import cs from './src/ControlPanel.module.scss';
import { cx } from 'utils';
import { FaMoon, FaSun } from 'react-icons/fa';

const ControlPanel = () => {
	const [theme, setTheme] = useState('dark');
	return (
		<div className={cx(cs.container)}>
			<Button.Icon
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
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