import React from 'react';

const useGallery = ({
  active,
  setActive,
  children,
  visibleSlides = children.length,
}) => {
  const keyPressHandler = (e, element) => {
    e.preventDefault();
    (e.code === 'Space' || e.code === 'Enter') && setActive(element);
  };
  const getGalleryZones = () => Math.ceil(children?.length / visibleSlides);
  const getGalleryZoneWidth = () => 100 / getGalleryZones();
  const getGalleryActiveZone = () => Math.floor(active / visibleSlides);
  const getGalleryPosition = () =>
    getGalleryActiveZone() * getGalleryZoneWidth();

  const isImageInActiveZone = (element) => Math.floor(element / visibleSlides);

  const GALLERY_WIDTH = [getGalleryZones() * 100, '%'].join('');
  const GALLERY_TRANSFORM = [
    'translateX(',
    -1 * getGalleryPosition(),
    '%)',
  ].join('');
  const IMAGE_WIDTH = [100 / (getGalleryZones() * visibleSlides), '%'].join('');
  const ARIA_LABELS = React.Children.map(children, (child, index) =>
    ['Slide', index + 1, 'of', children.length].join(' '),
  );

  return {
    ARIA_LABELS,
    GALLERY_TRANSFORM,
    GALLERY_WIDTH,
    IMAGE_WIDTH,
    getGalleryActiveZone,
    isImageInActiveZone,
    keyPressHandler,
  };
};

export default useGallery;
