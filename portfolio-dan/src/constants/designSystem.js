/**
 * DESIGN SYSTEM - Sistema de diseño centralizado
 * Paleta de colores, tipografía y espacios
 */

export const colors = {
  // Primarios
  dark: '#0F172A',
  darkAlt: '#1A1F35',
  white: '#FFFFFF',
  
  // Azules
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
  },
  
  // Púrpura
  purple: {
    500: '#8B5CF6',
    600: '#7C3AED',
  },
  
  // Cyan
  cyan: {
    400: '#22D3EE',
    500: '#06B6D4',
  },
  
  // Grises
  gray: {
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
  },
};

export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
  h4: 'text-xl md:text-2xl lg:text-3xl font-bold',
  body: 'text-base md:text-lg leading-relaxed',
  small: 'text-sm md:text-base',
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
};

export const animations = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: 'cubic-bezier(0.23, 1, 0.320, 1)',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
