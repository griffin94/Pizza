// https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html
// https://www.w3.org/TR/wai-aria-practices-1.1/#carousel

import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../../../utils';
import { IconContext } from 'react-icons';
import useCarousel from './useCarousel';

const Carousel = ({
	ariaLabel,
	children,
	className,
	style,
	navigationColor = '#fff',
	navigationSize = '20px',
	variant = 'scroll',
}) =>
	(({ active, setActive, IDS }) => (
		<IconContext.Provider
			value={{
				color: navigationColor,
				size: navigationSize,
			}}
		>
			<section
				className={cx(className)}
				style={style}
				id={IDS.carousel}
				aria-label={ariaLabel}
				aria-roledescription='carousel'
			>
				{React.Children.map(children, (child) =>
					React.cloneElement(child, {
						active,
						setActive,
						IDS,
						variant
					}),
				)}
			</section>
		</IconContext.Provider>
	))(useCarousel());

Carousel.propTypes = {
	ariaLabel: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
	navigationColor: PropTypes.string,
	navigationSize: PropTypes.string,
	variant: PropTypes.oneOf(['fade', 'scroll']),
};

export default Carousel;
