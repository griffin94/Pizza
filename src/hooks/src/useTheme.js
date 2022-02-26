import { useState, useEffect } from 'react';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

const THEME_PREFIX = 'pizza-theme';

const useTheme = () => {
  const getThemePreferencesInLocalStorage = () =>
    localStorage.getItem(THEME_PREFIX);
  const colorSchemeQueryList = matchMedia('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useState(() => {
    const themePreferencesInLocalStorage = getThemePreferencesInLocalStorage();

    if (themePreferencesInLocalStorage) {
      return themePreferencesInLocalStorage;
    }
    if (colorSchemeQueryList) {
      return colorSchemeQueryList.matches ? THEMES.DARK : THEMES.LIGHT;
    }
    return THEMES.LIGHT;
  });

  const changeTheme = (theme) => {
    localStorage.setItem(THEME_PREFIX, theme);
    setTheme(theme);
  };

  const toggleTheme = () =>
    changeTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);

  const setColorScheme = (e) => {
    if (!getThemePreferencesInLocalStorage()) {
      e.matches ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
    }
  };

  useEffect(() => {
    colorSchemeQueryList.addEventListener('change', setColorScheme);
    return () => {
      colorSchemeQueryList.removeEventListener('change', setColorScheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    theme,
    changeTheme,
    toggleTheme,
  };
};

export default useTheme;
