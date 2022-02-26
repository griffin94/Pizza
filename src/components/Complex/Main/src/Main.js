import PropTypes from 'prop-types';
import { cx } from 'utils';
import cs from './Main.module.scss';

const Main = ({ children }) => (
  <main className={cx(cs.container)}>{children}</main>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
