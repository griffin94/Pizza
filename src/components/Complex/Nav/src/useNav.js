import { useState } from 'react';

const useNav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);

  return {
    open,
    setOpen,
    toggle,
  };
};

export default useNav;
