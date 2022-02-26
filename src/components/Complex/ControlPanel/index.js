import React from 'react';
import { Button } from 'components';
import cs from './src/ControlPanel.module.scss';
import { cx } from 'utils';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'hooks';

const ControlPanel = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx(cs.container)}>
      <Button.Icon onClick={toggleTheme}>
        <FaMoon
          className={cx(
            cs.icon,
            cs.closeIcon,
            {
              light: cs.open,
              dark: cs.close,
            }[theme],
          )}
        />
        <FaSun
          className={cx(
            cs.icon,
            cs.openIcon,
            {
              light: cs.open,
              dark: cs.close,
            }[theme],
          )}
        />
      </Button.Icon>
    </div>
  );
};

export default ControlPanel;
