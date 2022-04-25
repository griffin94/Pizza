import { useMenu } from '../../../../api';
import Menu from './Menu';

export default () => ((props) => <Menu {...props} />)(useMenu());
