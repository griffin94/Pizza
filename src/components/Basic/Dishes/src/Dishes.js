import PropTypes from 'prop-types';
import cs from './Dishes.module.scss';
import { cx } from 'utils';



const Dishes = ({ children, kind }) => (
	<div className={cx(cs.container)}>
		<header className={cx(cs.header)}>
			<h2 className={cx(cs.title)}>{kind}</h2>
		</header>
		<ul className={cx(cs.list)}>{children}</ul>
	</div>
);

Dishes.propTypes = {
	children: PropTypes.node,
	kind: PropTypes.string
};

export default Dishes;
