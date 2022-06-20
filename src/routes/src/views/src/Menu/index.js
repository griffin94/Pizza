import PropTypes from 'prop-types';
import { Button, Products, Section } from 'components';
import { withLoader } from 'components/HOC';
import useMenu from './src/useMenu';
import { CATEGORIES_DICTIONARY } from 'routes/src/constans';
import { cx } from 'utils';
import cs from './src/Menu.module.scss';
import { KINDS } from 'components/Basic/Button/src/Button';

const Menu = ({ activeFilter, data, filter, visibleData }) =>
  (({ chooseProduct }) => (
    <>
      <Section className={cx(cs.filters)}>
        {Object.keys(data).map((category) => (
          <Button
            className={cx(cs.button)}
            key={category}
            kind={activeFilter === category ? KINDS.PRIMARY : null}
            onClick={() => filter(category)}
          >
            {CATEGORIES_DICTIONARY[category]}
          </Button>
        ))}
      </Section>
      {visibleData &&
        Object.entries(visibleData).map(([category, products]) => (
          <Products category={CATEGORIES_DICTIONARY[category]} key={category}>
            {products.map((product) => (
              <Products.Item
                category={category}
                chooseProduct={chooseProduct}
                key={product.id}
                {...product}
              />
            ))}
          </Products>
        ))}
    </>
  ))(useMenu());

Menu.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
};

export default withLoader(Menu);
