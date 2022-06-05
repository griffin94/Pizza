import { SIZE, DOUGH, SAUCE, INGREDIENTS } from 'routes/src/constans';

const serializeDetails = (details) =>
  Object.entries(details).reduce(
    (result, [key, value]) => ({
      ...result,
      ...(key === 'size' && {
        [key]: SIZE[value],
      }),
      ...(key === 'dough' && {
        [key]: DOUGH[value],
      }),
      ...(key === 'sauce' && {
        [key]: Object.entries(value).reduce(
          (result, [sauce, isSelected]) =>
            isSelected
              ? result.length > 0
                ? `${result}, ${SAUCE[sauce]}`
                : SAUCE[sauce]
              : result,
          '',
        ),
      }),
      ...(key === 'ingredients' && {
        [key]: Object.entries(value).reduce(
          (result, [sauce, isSelected]) =>
            isSelected
              ? result.length > 0
                ? `${result}, ${INGREDIENTS[sauce]}`
                : INGREDIENTS[sauce]
              : result,
          '',
        ),
      }),
    }),
    {},
  );

const productHandler = (product) => ({
  ...product,
  ...(product.details && { details: serializeDetails(product.details) }),
});

export default productHandler;
