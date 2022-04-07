import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './src/Textfield.module.scss';
import { useId } from 'react-id-generator';

const Textfield = ({
  className,
  error,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const [id] = useId(1, 'textfield-');
  
  return (
    <div className={cx(className, cs.container)}>
      <label className={cx(cs.label)} htmlFor={id}>
        {label}
      </label>
      <input
        className={cx(cs.input, error && cs.error)}
        value={value}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
      />
      <span className={cx(cs.errorContainer)}>{error}</span>
    </div>
  )
};

Textfield.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Textfield.defaultProps = {
  type: 'text',
};

export default Textfield;
