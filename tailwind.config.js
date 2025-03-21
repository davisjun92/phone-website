/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        dark: {
          DEFAULT: '#1C1C1E',
          light: '#2C2C2E',
          lighter: '#3A3A3C',
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#F2F2F7',
          darker: '#E5E5EA',
        },
      },
      animation: {
        'cursor-fade': 'cursorFade 0.5s ease-in-out',
        'cursor-scale': 'cursorScale 0.3s ease-in-out',
      },
      keyframes: {
        cursorFade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        cursorScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
} 