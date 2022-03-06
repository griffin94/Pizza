import PropTypes from 'prop-types';
import cs from './Dishes.module.scss';
import { cx } from 'utils';
import Section from 'components/Basic/Section';

const Dishes = ({ children, kind }) => (
  <Section>
    <header className={cx(cs.header)}>
      <h2 className={cx(cs.title)}>{kind}</h2>
    </header>
    <ul className={cx(cs.list)}>{children}</ul>
  </Section>
);

Dishes.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
};

export default Dishes;
