import React, { cloneElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { cx } from '../../utils';
import cs from './Hint.module.scss';
import useHint from './useHint';

const Hint = ({ animation, arrowSize, children, content, openDelay }) =>
	(({ containerRef, hideHint, showHint, styles, open, childrenRef }) => (
		<>
			{children &&
				cloneElement(children, {
					ref: childrenRef,
					onMouseOver: showHint,
					onFocus: showHint,
					onMouseLeave: hideHint,
					onBlur: hideHint,
				})}
			{open &&
				createPortal(
					<div
						ref={containerRef}
						className={cx(cs.container)}
						style={styles.container}
					>
						<div
							style={styles.hint}
							className={cx(
								cs.hint,
								animation && cs[animation],
							)}
						>
							<div className={cx(cs.content)}>{content}</div>
							<div className={cx(cs.arrow)} style={styles.arrow}></div>
						</div>
					</div>,
					document.body,
				)}
		</>
	))(useHint({ arrowSize, openDelay }));

Hint.propTypes = {
	animation: PropTypes.oneOf(['fadeIn', 'zoomIn']),
	arrowSize: PropTypes.number,
	children: PropTypes.node,
	content: PropTypes.string.isRequired,
	openDelay: PropTypes.number,
};

export default Hint;
