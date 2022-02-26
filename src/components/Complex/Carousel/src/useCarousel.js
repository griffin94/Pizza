import { useState } from 'react';
import { useId } from 'react-id-generator';

const useCarousel = () => {
  const [active, setActive] = useState(0);
  const [id] = useId(1, 'carousel-');
  const IDS = {
    carousel: id,
    slides: `${id}-slides-list`,
  };

  return {
    active,
    setActive,
    IDS,
  };
};

export default useCarousel;
