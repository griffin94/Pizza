import PropTypes from 'prop-types';
import cs from './Products.module.scss';
import { cx } from 'utils';
import Section from 'components/Basic/Section';

const Products = ({ category, children }) => (
  <Section>
    <header className={cx(cs.header)}>
      <h2 className={cx(cs.title)}>{category}</h2>
    </header>
    <ul className={cx(cs.list)}>{children}</ul>
  </Section>
);

Products.propTypes = {
  category: PropTypes.string,
  children: PropTypes.node,
};

export default Products;
