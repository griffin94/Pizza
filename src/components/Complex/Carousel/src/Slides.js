import React from 'react';
import PropTypes from 'prop-types';
import useSlides from './useSlides';
import { cx } from 'utils';
import cs from './Carousel.module.scss';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Slides = ({ children, active, setActive, variant, IDS }) =>
  (({
    nextSlide,
    previousSlide,
    SCROLL_VARIANT,
    FADE_VARIANT,
    LIST_WIDTH,
    LIST_TRANSFORM,
    SLIDE_POSITIONS,
    ARIA_LABELS,
  }) => (
    <div className={cs.slides}>
      <ul
        className={cx(cs.list)}
        style={{
          width: LIST_WIDTH,
          transform: SCROLL_VARIANT && LIST_TRANSFORM,
        }}
        id={IDS.slides}
        // The live region is off when the carousel is automatically rotating
        aria-live='polite'
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            className: cx(
              child.props.className,
              FADE_VARIANT && cs.fade,
              FADE_VARIANT && index === active && cs.active,
            ),
            style: {
              ...child.props.style,
              left: FADE_VARIANT && SLIDE_POSITIONS[index],
            },
            role: 'group',
            'aria-roledescription': 'slide',
            'aria-label': ARIA_LABELS[index],
            'aria-hidden': index !== active,
          }),
        )}
      </ul>
      <button
        className={cx(cs.button, cs.leftButton)}
        onClick={previousSlide}
        aria-controls={IDS.slides}
        aria-label='previous slide'
      >
        <BiLeftArrow />
      </button>
      <button
        className={cx(cs.button, cs.rightButton)}
        onClick={nextSlide}
        aria-controls={IDS.slides}
        aria-label='next slide'
      >
        <BiRightArrow />
      </button>
    </div>
  ))(useSlides({ children, active, setActive, variant }));

Slides.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
  IDS: PropTypes.object,
};

export default Slides;
