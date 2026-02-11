// theme/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { lightColors, darkColors } from '../theme/color';
import { themeBlack_SearchIcon, themeLight_SearchIcon } from '../theme/icons';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  colors: typeof lightColors | typeof darkColors;
  searchInput: typeof themeBlack_SearchIcon
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  colors: darkColors,
  searchInput: themeBlack_SearchIcon,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors = theme === 'light' ? lightColors : darkColors;
  const searchInput =
  theme === 'light'
    ? themeLight_SearchIcon
    : themeBlack_SearchIcon;

  return (
    <ThemeContext.Provider value={{ theme, colors, searchInput, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o tema facilmente
export const useTheme = () => useContext(ThemeContext);
