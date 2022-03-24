import { cx } from 'utils';
import cs from './src/Loader.module.scss';

const Loader = () => (
  <div className={cx(cs.container)}>
    <span className={cx(cs.loader)}></span>
    <span>Ładowanie...</span>
  </div>
)

export default Loader;