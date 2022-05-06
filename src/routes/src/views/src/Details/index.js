import React from 'react';
import { withLoader } from 'components/HOC';
import {
  Button,
  Checkbox,
  Fieldset,
  Radio,
  Section,
  Textfield,
} from 'components';
import Form from 'components/Basic/Form';
import useDetails from './src/useDetails';
import cs from './src/Details.module.scss';
import { cx } from 'utils';

const Details = (props) =>
  (({ data, form, price }) => (
    <div className={cx(cs.container)}>
      <Section title={data.name} className={cx(cs.section)}>
        <span className={cx(cs.price)}>
          Do zapłaty:&nbsp;<strong>{price.total}</strong> zł
          {price.details.dough ||
          price.details.sauce ||
          price.details.ingredients
            ? ', w tym:'
            : null}
        </span>
        <ul className={cx(cs.list)}>
          {price.details.dough ? (
            <li>
              Opłata za pizzę:&nbsp;<strong>{price.details.dough}</strong>&nbsp;zł
            </li>
          ) : null}
          {price.details.sauce ? (
            <li>
              Opłata za sosy:&nbsp;<strong>{price.details.sauce}</strong>&nbsp;zł
            </li>
          ) : null}
          {price.details.ingredients ? (
            <li>
              Opłata za dodatkowe składniki:&nbsp;
              <strong>{price.details.ingredients}</strong>&nbsp;zł
            </li>
          ) : null}
        </ul>
      </Section>
      {data.fields && (
        <Form onSubmit={form.handleSubmit}>
          {Object.entries(data.fields).map(([fieldName, fieldProps]) => {
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
          <Button className={cx(cs.button)}>Dodaj</Button>
        </Form>
      )}
    </div>
  ))(useDetails(props));

export default withLoader(Details);
