import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'hooks';
import { isNotEmpty } from 'validators';
import { ROUTES } from 'routes/src/constans';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/actions/creators';

const ERRORS = Object.freeze({
	SIZE: 'Wybierz rozmiar pizzy',
	DOUGH: 'Wybierz rodzaj ciasta',
});

const useDetails = ({ data }) => {
	const [amount, setAmount] = useState(1);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const form = useForm({
		initialValues: data.initialValues,
		validate: (values) => {
			const size = isNotEmpty(values.size, ERRORS.SIZE);
			const dough = isNotEmpty(values.dough, ERRORS.DOUGH);
			return Object.assign({}, size && { size }, dough && { dough });
		},
		onSubmit: (values) => {
			const product = {
				amount,
				id: data.id,
				image: data.image,
				details: form.values,
			};
			dispatch(addProduct(product));
			navigate(ROUTES.CART);
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
					.reduce((result, [fieldName, fieldProps]) => {
						const price = calcFieldPrice(fieldProps.type)(
							form.values[fieldName],
							selectedSize[fieldName],
						);
						return {
							...result,
							[fieldName]:
								fieldName === 'dough' || fieldName === 'ingredients'
									? Number((price * amount).toFixed(2))
									: Number((price).toFixed(2)),
						};
					}, {})
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

	const incrementAmount = () => setAmount((currState) => currState + 1);

	const decrementAmount = () => setAmount((currState) => currState - 1);

	return {
		amount,
		data,
		decrementAmount,
		form,
		incrementAmount,
		price: calcProductPrice(),
	};
};

export default useDetails;
