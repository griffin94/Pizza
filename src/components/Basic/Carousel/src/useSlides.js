import React from 'react';

const useSlides = ({children, active, setActive, variant}) => {
    
    const nextSlide = () => {
		setActive((active) => (active >= children?.length - 1 ? 0 : active + 1));
	};
	const previousSlide = () => {
		setActive((active) => (active === 0 ? children?.length - 1 : active - 1));
	};
	const getListWidth = () => children?.length * 100;
	const getPosition = (element) => -(element / children?.length) * 100;

    const SCROLL_VARIANT = variant === 'scroll';
    const FADE_VARIANT = variant === 'fade';
    const LIST_WIDTH = [getListWidth(), '%'].join('');
    const LIST_TRANSFORM = ['translateX(', getPosition(active), '%)'].join('');
    const SLIDE_POSITIONS = React.Children.map(children, (child, index) =>
        [getPosition(index), '%'].join(''),
    );
    const ARIA_LABELS = React.Children.map(children, (child, index) =>
        [index + 1, 'of', children.length].join(' '),
    );

    return {
        nextSlide,
        previousSlide,
        SCROLL_VARIANT,
        FADE_VARIANT,
        LIST_WIDTH,
        LIST_TRANSFORM,
        SLIDE_POSITIONS,
        ARIA_LABELS
    }
}

export default useSlides;