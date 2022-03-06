import PropTypes from 'prop-types';
import cs from './src/Section.module.scss';
import { cx } from 'utils';

const Section = ({ children, title }) => (
	<section className={cx(cs.section)}>
		{title && <h2 className={cx(cs.title)}>{title}</h2>}
		{children}
	</section>
);

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default Section;
