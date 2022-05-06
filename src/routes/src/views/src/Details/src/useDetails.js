import { useForm } from 'hooks';
import { isNotEmpty } from 'validators';

const ERRORS = Object.freeze({
	SIZE: 'Wybierz rozmiar pizzy',
	DOUGH: 'Wybierz rodzaj ciasta',
});

const useDetails = ({ data }) => {
	const form = useForm({
		initialValues: data.initialValues,
		validate: (values) => {
			const size = isNotEmpty(values.size, ERRORS.SIZE);
			const dough = isNotEmpty(values.dough, ERRORS.DOUGH);
			return Object.assign(
        {},
        size && { size },
        dough && { dough }
      );
		},
		onSubmit: (values) => {
			console.log('SUBMIT!!');
		},
	});

	const calcFieldPrice = (type) =>
		({
			radio: (value, prices) => prices[value] || 0,
			checkbox: (values, prices) =>
				Object.entries(values).reduce(
					(result, [product, isSelected]) =>
						isSelected ? Number((result + prices[product]).toFixed(2)) : result,
					0,
				),
		}[type]);

	const calcProductPrice = () => {
		const selectedSize = data.prices[form.values.size];
		const details = selectedSize
			? Object.entries(data.fields)
					.filter(
						([fieldName, fieldProps]) =>
							fieldName !== 'size' &&
							(fieldProps.type === 'radio' || fieldProps.type === 'checkbox'),
					)
					.reduce(
						(result, [fieldName, fieldProps]) => ({
							...result,
							[fieldName]: calcFieldPrice(fieldProps.type)(
								form.values[fieldName],
								selectedSize[fieldName],
							),
						}),
						{},
					)
			: {};
		const total = Number(
			Object.values(details)
				.reduce((result, price) => result + price, 0)
				.toFixed(2),
		);
		return {
			details,
			total,
		};
	};

	return {
		data,
		form,
		price: calcProductPrice(),
	};
};

export default useDetails;
