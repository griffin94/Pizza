import React from 'react';
import { Nav } from 'components';
import { routes } from 'routes';
import { cx } from 'utils';
import cs from './Header.module.scss';

const Header = () => {
	return (
		<header className={cx(cs.container)}>
			<Nav>
				{routes.map(({ id, path, linkName }) => (
					<Nav.Link key={id} path={path}>
						{linkName}
					</Nav.Link>
				))}
			</Nav>
		</header>
	);
};

export default Header;