import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { cx } from 'utils';
import cs from './Link.module.scss';

const Link = ({ children, path }) => (
	<li className={cx(cs.item)}>
		<RouterLink to={path}>{children}</RouterLink>
	</li>
);

Link.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
}

export default Link;