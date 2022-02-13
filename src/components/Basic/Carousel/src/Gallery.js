import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Carousel.module.scss';
import useGallery from './useGallery';

const Gallery = ({
	active,
	children,
	setActive,
	visibleSlides,
	IDS
}) =>
	(({
		ARIA_LABELS,
		GALLERY_TRANSFORM,
		GALLERY_WIDTH,
		IMAGE_WIDTH,
		getGalleryActiveZone,
		isImageInActiveZone,
		keyPressHandler,
	}) => (
		<div className={cx(cs.gallery)}>
			<ul
				className={cx(cs.list)}
				style={{
					width: GALLERY_WIDTH,
					transform: GALLERY_TRANSFORM,
				}}
			>
				{React.Children.map(children, (child, index) =>
					React.cloneElement(child, {
						isActive: active === index,
						onClick: () => setActive(index),
						onKeyPress: (e) => keyPressHandler(e, index),
						style: {
							...child.props.style,
							width: IMAGE_WIDTH,
						},
						tabIndex:
							isImageInActiveZone(index) === getGalleryActiveZone() ? 0 : -1,
						role: 'button',
						'aria-label': ARIA_LABELS[index],
						'aria-controls': IDS.slides,
						'aria-hidden':
							isImageInActiveZone(index) !== getGalleryActiveZone(),
					}),
				)}
			</ul>
		</div>
	))(useGallery({active, children, visibleSlides}));

Gallery.propTypes = {
	active: PropTypes.number,
	children: PropTypes.node.isRequired,
	setActive: PropTypes.func,
	visibleSlides: PropTypes.number,
	IDS: PropTypes.object
};

export default Gallery;
