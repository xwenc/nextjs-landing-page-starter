/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '575px',
      md: '768px',
      lg: '1025px',
      xl: '1202px',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
    },
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: 'normal' }],
    '2xs': ['0.8125rem', { lineHeight: 'normal' }],
    sm: ['0.875rem', { lineHeight: 'normal' }],
    base: ['1rem', { lineHeight: 'normal' }],
    lg: ['1.25rem', { lineHeight: 'normal' }],
    xl: ['1.5rem', { lineHeight: 'normal' }],
    '2xl': ['1.75rem', { lineHeight: 'normal' }],
    '3xl': ['2rem', { lineHeight: 'normal' }],
    '4xl': ['2.25rem', { lineHeight: 'normal' }],
    '5xl': ['2.5rem', { lineHeight: 'normal' }],
    '6xl': ['3.5rem', { lineHeight: 'normal' }],
    '7xl': ['4.25rem', { lineHeight: 'normal' }],
  },
  // variants: {
  // 	display: ['children', 'children-not'],
  // },
  plugins: [],
};
