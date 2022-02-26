import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Button.module.scss';

const Button = ({ children, className, kind, ...props }) => {
  return (
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
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.string,
};

Button.defaultProps = {
  kind: 'primary',
};

export default Button;
