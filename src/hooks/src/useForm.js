import { useState, useEffect } from 'react';
import _ from 'lodash';

const useForm = ({ initialValues = {}, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    (!_.isEmpty(touched) || isSubmitting) && handleValidate();
  }, [values, isSubmitting, touched]);

  const handleValidate = () => {
    if (_.isFunction(validate)) {
      const errors = validate(values);
      const isValid = _.isEmpty(errors);
      if (isSubmitting) {
        if (isValid && _.isFunction(onSubmit)) {
          onSubmit(values);
        }
        setIsSubmitting(false);
      }
      setErrors(errors);
      setIsValid(isValid);
    }
  };

  const handleChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    const field = e.target.name
      .split('.')
      .reverse()
      .reduce((result, item, idx) => {
        return idx === 0
          ? { [item]: isCheckbox ? e.target.checked : e.target.value }
          : { [item]: result };
      }, {});
    setValues((values) => _.merge({ ...values }, field));
  };

  const handleBlur = (e) => {
    const field = e.target.name
      .split('.')
      .reverse()
      .reduce((result, item, idx) => {
        return idx === 0 ? { [item]: true } : { [item]: result };
      }, {});
    setTouched((touched) => _.merge({ ...touched }, field));
  };

  const setAllInputsToTouched = (values) => {
    return Object.entries(values).reduce((result, [key, value]) => {
      return _.isObject(value)
        ? {
            ...result,
            [key]: setAllInputsToTouched(value),
          }
        : {
            ...result,
            [key]: true,
          };
    }, {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTouched(setAllInputsToTouched(initialValues));
  };

  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    isValid,
    touched,
    values,
  };
};

export default useForm;
