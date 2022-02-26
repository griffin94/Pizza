const getAbsolutePosition = (el) => {
  const { bottom, height, left, right, top, width } =
    el.getBoundingClientRect();
  return {
    height,
    width,
    top,
    bottom,
    left,
    right,
    absoluteTop: top + window.scrollY,
    absoluteBottom: bottom + window.scrollY,
    absoluteLeft: left + window.scrollX,
    absoluteRight: right + window.scrollX,
  };
};

export default getAbsolutePosition;
