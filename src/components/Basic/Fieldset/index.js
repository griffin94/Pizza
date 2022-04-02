import React from 'react';
import PropTypes from 'prop-types';
import cs from './src/Fieldset.module.scss';
import { cx } from 'utils';

const Fieldset = ({ className, children, error, legend }) => (
  <fieldset className={cx(className, cs.container)}>
    <legend className={cx(cs.legend)}>{legend}</legend>
    <div className={cx(cs.inputs)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          error: !!error,
        }),
      )}
    </div>
    <span className={cx(cs.errorContainer)}>{error}</span>
  </fieldset>
);

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
  legend: PropTypes.string,
};

export default Fieldset;
