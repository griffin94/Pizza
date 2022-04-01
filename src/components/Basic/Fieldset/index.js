import PropTypes from 'prop-types';
import cs from './src/Fieldset.module.scss';
import { cx } from 'utils';

const Fieldset = ({ className, children, legend }) => (
	<fieldset className={cx(className, cs.container)}>
		<legend className={cx(cs.legend)}>{legend}</legend>
		{children}
	</fieldset>
);

Fieldset.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	legend: PropTypes.string,
};

export default Fieldset;
