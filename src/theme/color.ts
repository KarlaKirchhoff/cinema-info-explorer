interface ColorTheme {
  background: string,        
  primary: string,            
  secundary: string,         
  active: string,            
  placeholder: string,
}

export const lightColors: ColorTheme = {
  background: '#FFFFFF',        // Branco
  primary: '#1A1A1A',              // Cinza Escuro
  secundary: '#F2F2F2',           // Cinza Claro
  active: '#B3B3B3',            // Cinza Médio
  placeholder: '#3B82F6',           // Azul Primário
};

export const darkColors: ColorTheme = {
  background: '#0F172A',        // Azul Petróleo
  primary: '#E2E8F0',              // Cinza Claro (Texto)
  secundary: '#1E293B',           // Cinza Carvão
  active: '#60A5FA',           // Azul Claro
  placeholder: '#94A3B8',       // Cinza Médio (placeholders)
};
