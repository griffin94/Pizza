import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Control.module.scss';
import { useId } from 'react-id-generator';

const Control = ({
  checked,
  className,
  error,
  label,
  name,
  onBlur,
  onChange,
  type,
  value,
}) => {
  const [id] = useId(1, `${type}-`);

  return (
    <div
      className={cx(
        className,
        cs.container,
        error && cs.error,
        {
          radio: cs.radio,
          checkbox: cs.checkbox,
        }[type],
      )}
    >
      <input
        checked={checked}
        className={cx(cs.input)}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      <label
        className={cx(cs.label)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

Control.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Control;
