import {Button} from 'components';
import { RiErrorWarningLine } from 'react-icons/ri';
import cs from './src/Error.module.scss';
import { cx } from 'utils';

const Error = ({ error, reload }) => (
  <div className={cx(cs.container)}>
    <RiErrorWarningLine />
    <p>Opss... Coś poszło nie tak...</p>
    <p>
      <code>{error.toString()}</code>
    </p>
    <Button onClick={reload}>Spróbuj ponownie</Button>
  </div>
);

export default Error;
