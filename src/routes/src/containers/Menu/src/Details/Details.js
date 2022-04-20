import React from 'react';
import { withLoader } from 'components/HOC';
import { Button, Checkbox, Fieldset, Radio, Textfield } from 'components';
import Form from 'components/Basic/Form';
import useDetails from './useDetails';

const Details = (props) =>
  (({ form, fields }) => (
    <>
      <p>Price: </p>
      {fields && (
        <Form onSubmit={form.handleSubmit}>
          {Object.entries(fields).map(([fieldName, fieldProps]) => {
            switch (fieldProps.type) {
              case 'radio':
                return (
                  <Fieldset
                    error={form.touched[fieldName] && form.errors[fieldName]}
                    key={fieldName}
                    legend={fieldProps.legend}
                  >
                    {fieldProps.options.map((option) => (
                      <Radio
                        checked={form.values[fieldName] === option.value}
                        name={fieldName}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        key={option.value}
                        value={option.value}
                        {...option}
                      />
                    ))}
                  </Fieldset>
                );
              case 'checkbox':
                return (
                  <Fieldset
                    error={form.touched[fieldName] && form.errors[fieldName]}
                    key={fieldName}
                    legend={fieldProps.legend}
                  >
                    {fieldProps.options.map((option) => (
                      <Checkbox
                        checked={form.values[fieldName]?.[option.name]}
                        name={[fieldName, option.name].join('.')}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        key={option.name}
                        label={option.label}
                      />
                    ))}
                  </Fieldset>
                );
              default:
                return (
                  <Textfield
                    error={form.touched[fieldName] && form.errors[fieldName]}
                    key={fieldName}
                    name={fieldName}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    value={form.values[fieldName]}
                    {...fieldProps}
                  />
                );
            }
          })}
          <Button>Submit</Button>
        </Form>
      )}
    </>
  ))(useDetails(props));

export default withLoader(Details);
