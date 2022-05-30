import React from 'react';
import { withLoader } from 'components/HOC';
import {
	Button,
	Checkbox,
	Counter,
	Fieldset,
	Form,
	List,
	Radio,
	Section,
	Textfield,
} from 'components';
import useDetails from './src/useDetails';
import cs from './src/Details.module.scss';
import { cx } from 'utils';

const Details = (props) =>
	(({ amount, data, decrementAmount, form, incrementAmount, price }) => (
		<div className={cx(cs.container)}>
			<Section className={cx(cs.priceSection)}>
				<div className={cx(cs.spacer)}>
					<h2 className={cx(cs.title)}>{data.name}</h2>
					<span className={cx(cs.price, cs.totalPrice)}>
						Do zapłaty:
            {' '}
            {price.total} zł
					</span>
					<List>
						<li>
							Opłata za pizzę:
              {' '}
              <span className={cx(cs.price)}>{price.details?.dough ?? 0} zł</span>
						</li>
						<li>
							Opłata za sosy:
              {' '}
              <span className={cx(cs.price)}>{price.details?.sauce ?? 0} zł</span>
						</li>
						<li>
							Opłata za dodatkowe składniki:
              {' '}
              <span className={cx(cs.price)}>{price.details?.ingredients ?? 0} zł</span>
						</li>
					</List>
					<img src={data.image} alt={data.name} className={cx(cs.image)} />
				</div>
			</Section>
			<Section>
				{data.fields && (
					<Form onSubmit={form.handleSubmit} className={cx(cs.form)}>
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
						<div className={cx(cs.submitContainer)}>
							<Counter
								className={cx(cs.counter)}
								count={amount}
								decrement={decrementAmount}
								increment={incrementAmount}
								min={1}
							/>
							<Button className={cx(cs.button)}>Dodaj</Button>
						</div>
					</Form>
				)}
			</Section>
		</div>
	))(useDetails(props));

export default withLoader(Details);
