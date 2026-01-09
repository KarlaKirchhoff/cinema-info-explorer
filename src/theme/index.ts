// src/theme/index.js
import { lightColors, darkColors } from './color';

export const createTheme = (mode = 'light') => {
  const colors = mode === 'dark' ? darkColors : lightColors;

  return {
    colors,
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    typography: {
      body: {
        fontSize: 16,
        lineHeight: 24,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
      },
    },
    // você pode adicionar mais estilos globais aqui
  };
};
