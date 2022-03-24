import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Button.module.scss';

export const KINDS = {
  PRIMARY: 'primary',
  ICON: 'icon'
}

const Button = ({ children, className, kind, ...props }) => (
  <button
    className={cx(
      className,
      cs.button,
      {
        icon: cs.icon,
        primary: cs.primary,
      }[kind],
    )}
    {...props}
  >
    {kind === KINDS.ICON
      ? React.Children.map(children, (child) => (
          <div className={cx(cs.iconWrapper)}>{child}</div>
        ))
      : children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.string,
};

Button.defaultProps = {
  kind: KINDS.PRIMARY,
};

export default Button;
