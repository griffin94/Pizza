const cx = (...classNames) =>
	classNames.filter((className) => className).join(' ') || null;
export default cx;
