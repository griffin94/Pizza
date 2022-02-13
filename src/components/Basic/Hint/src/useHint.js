import { useState, useRef, useLayoutEffect } from 'react';
import { getAbsolutePosition } from '../../../../utils/';

const useHint = ({ arrowSize = 10, openDelay = 0 }) => {
	const [open, setOpen] = useState(false);
	const [styles, setStyles] = useState({});

	const childrenRef = useRef(null);
	const containerRef = useRef(null);
	const timeOutRef = useRef(null);

	const ARROW_HEIGHT = parseFloat(
		(Math.sqrt(2 * Math.pow(arrowSize, 2)) / 2).toFixed(2),
	);

	useLayoutEffect(() => {
		if (childrenRef.current == null || containerRef.current == null) {
			setStyles({});
			return;
		}
		setStyles(getHintStyles());
	}, [open]);

	const getHintStyles = () => {
		const children = getAbsolutePosition(childrenRef.current);
		const hint = getAbsolutePosition(containerRef.current);
		const MIN_MARGIN = 5;
		const SHOULD_HINT_TOBE_TOP_POSITIONED =
			children.top > hint.height + ARROW_HEIGHT;

		const container = {
			top: SHOULD_HINT_TOBE_TOP_POSITIONED
				? `${children.absoluteTop - hint.height - ARROW_HEIGHT}px`
				: `${children.absoluteTop + children.height + ARROW_HEIGHT}px`,
		};

		const arrow = {
			width: `${arrowSize}px`,
			height: `${arrowSize}px`,
			top: SHOULD_HINT_TOBE_TOP_POSITIONED
				? `${hint.height - arrowSize / 2}px`
				: `${(arrowSize / 2) * -1}px`,
		};

		const left = children.absoluteLeft + children.width / 2 - hint.width / 2;
		const right =
			document.documentElement.clientWidth -
			children.absoluteLeft -
			children.width / 2 -
			hint.width / 2;

		if (left <= MIN_MARGIN) {
			container.left = `${MIN_MARGIN}px`;
			arrow.left = `${
				children.absoluteLeft + children.width / 2 - MIN_MARGIN - arrowSize / 2
			}px`;
		}
		if (right <= MIN_MARGIN) {
			container.right = `${MIN_MARGIN}px`;
			arrow.left = `${
				hint.width -
				(document.documentElement.clientWidth -
					children.absoluteLeft -
					children.width / 2 -
					MIN_MARGIN +
					arrowSize / 2)
			}px`;
		}
		if (hint.width >= document.documentElement.clientWidth) {
			container.left = `${MIN_MARGIN}px`;
			container.right = `${MIN_MARGIN}px`;
			arrow.left = `${
				children.absoluteLeft + children.width / 2 - MIN_MARGIN - arrowSize / 2
			}px`;
		}
		if (left > MIN_MARGIN && right > MIN_MARGIN) {
			container.left = `${left}px`;
			arrow.left = `${hint.width / 2 - arrowSize / 2}px`;
		}
		return { container, arrow };
	};

	const showHint = () => {
		if (timeOutRef.current) return;
		timeOutRef.current = setTimeout(() => setOpen(true), openDelay);
	};
	const hideHint = () => {
		clearTimeout(timeOutRef.current);
		timeOutRef.current = null;
		setOpen(false);
	};

	return {
		childrenRef,
		containerRef,
		hideHint,
		showHint,
		open,
		styles,
	};
};

export default useHint;
