import React, { useRef } from 'react';
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
  const inputRef = useRef(null);

  const checkInput = (e) => {
    e.preventDefault();
    (e.code === 'Space' || e.code === 'Enter') &&
      inputRef.current !== null &&
      inputRef.current.click();
  };

  return (
    <div
      className={cx(
        className,
        cs.container,
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
        ref={inputRef}
        type={type}
        value={value}
      />
      <label
        className={cx(cs.label, error && cs.error)}
        htmlFor={id}
        onKeyPress={checkInput}
        tabIndex='0'
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
