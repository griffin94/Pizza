import PropTypes from 'prop-types';
import cs from './src/Section.module.scss';
import { cx } from 'utils';

const Section = ({ children, className, title }) => (
	<section className={cx(cs.section, className)}>
		{title && <h2 className={cx(cs.title)}>{title}</h2>}
		{children}
	</section>
);

Section.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
};

export default Section;
