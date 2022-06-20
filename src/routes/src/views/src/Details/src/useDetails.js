import { useState, useEffect } from 'react';
import { useId } from 'react-id-generator';
import { useNavigate } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { useForm } from 'hooks';
import { isNotEmpty } from 'validators';
import { ROUTES } from 'routes/src/constans';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from 'redux/actions/creators';
import { ERRORS } from '../../../../constans';

const useDetails = ({ data }) => {
  const [amount, setAmount] = useState(data.amount || 1);
  const [price, setPrice] = useState({});
  const [orderId] = useId(1, data.id);
  const isProductBeingAdded = !data.orderId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: cloneDeep(data.values),
    validate: (values) => {
      const size = isNotEmpty(values.size, ERRORS.SIZE);
      const dough = isNotEmpty(values.dough, ERRORS.DOUGH);
      return Object.assign({}, size && { size }, dough && { dough });
    },
    onSubmit: (values) => {
      const product = {
        ...data,
        ...(isProductBeingAdded && {orderId}),
        amount,
        values,
        price: price.pizza,
        priceTotal: price.pizzaTotal,
      };
      isProductBeingAdded ? dispatch(addProduct(product)) : dispatch(editProduct(product));
      navigate(ROUTES.CART);
    },
  });

  useEffect(() => setPrice(calcProductPrice()), [amount, form.values]);

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
              [fieldName]: Number(price.toFixed(2)),
              [fieldName + 'Total']: Number((price * amount).toFixed(2)),
            };
          }, {})
      : {};
    const total = Object.entries(details).reduce(
      (result, [key, price]) => ({
        ...result,
        ...(key.includes('Total')
          ? {
              pizzaTotal: Number((result.pizzaTotal + price).toFixed(2)),
            }
          : {
              pizza: Number((result.pizza + price).toFixed(2)),
            }),
      }),
      {
        pizza: 0,
        pizzaTotal: 0,
      },
    );
    return {
      ...details,
      ...total,
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
    isProductBeingAdded,
    price,
  };
};

export default useDetails;
