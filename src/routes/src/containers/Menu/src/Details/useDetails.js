import { useEffect } from 'react';
import { useForm } from 'hooks';

const useDetails = ({ data }) => {
	const form = useForm({
		initialValues: data && data.initialValues,
		validate: (values) => {
			const errors = {};
			if (!values.size) {
				errors.size = 'Wybierz rozmiar pizzy';
			}
			if (!values.dough) {
				errors.dough = 'Wybierz rodzaj ciasta';
			}
			if (!values.sauce.tomato) {
				errors.sauce = 'Wybierz dodatkowy sos';
			}
			if (!values.password) {
				errors.password = 'Wpisz haslo';
			}
			return errors;
		},
		onSubmit: (values) => {
			console.log('SUBMIT!!');
		},
	});

	const calcProductPrice = () => {
		const selectedSize = data.prices[form.values.size];
		const price = {
			dough: selectedSize.dough[form.values.dough],
			sauce: (() => {
				const selectedsauces = Object.entries(form.values.sauce).reduce(
					(result, [sauce, isSelected]) =>
						isSelected ? [...result, sauce] : result,
					[],
				);
				return selectedsauces.reduce(
					(result, sauce) => result + selectedSize.sauce[sauce],
					0,
				);
			})(),
			ingredients: (() => {
				const selectedIngredients = Object.entries(form.values.ingredients).reduce(
					(result, [ingredient, isSelected]) =>
						isSelected ? [...result, ingredient] : result,
					[],
				);
				return selectedIngredients.reduce(
					(result, ingredient) => result + selectedSize.ingredients[ingredient],
					0,
				);
			})(),
		};
		console.log(price);
	};
  
  useEffect(() => {
    calcProductPrice();
  })


	return {
		form,
    fields: data && data.fields,
	};
};

export default useDetails;
