import { useDetails } from '../../../../api';
import Details from './Details';

export default () => ((props) => <Details {...props} />)(useDetails());
