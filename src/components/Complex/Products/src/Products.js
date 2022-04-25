import PropTypes from 'prop-types';
import cs from './Products.module.scss';
import { cx } from 'utils';
import Section from 'components/Basic/Section';

const Products = ({ children, category }) => (
  <Section>
    <header className={cx(cs.header)}>
      <h2 className={cx(cs.title)}>{category}</h2>
    </header>
    <ul className={cx(cs.list)}>{children}</ul>
  </Section>
);

Products.propTypes = {
  children: PropTypes.node,
  category: PropTypes.string,
};

export default Products;
