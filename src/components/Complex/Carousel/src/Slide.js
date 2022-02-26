import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Carousel.module.scss';

const Slide = ({ children, className, isActive, ...props }) => (
  <li className={cx(cs.listItem, className)} {...props}>
    {children &&
      React.cloneElement(children, {
        className: cx(
          children.props.className,
          children.type === 'img' && cs.image,
          isActive && cs.active,
        ),
      })}
  </li>
);

Slide.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Slide;
