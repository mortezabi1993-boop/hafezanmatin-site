/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        persian: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#edf7ed',
          100: '#d7ecd8',
          200: '#b2d8b5',
          300: '#86bd8c',
          400: '#5d9f66',
          500: '#3e8149',
          600: '#306b39',
          700: '#285630',
          800: '#214827',
          900: '#19381e',
          950: '#0d2111',
        },
        accent: {
          50:  '#fffbea',
          100: '#fff2ad',
          200: '#ffe675',
          300: '#ffda3f',
          400: '#f6c923',
          500: '#e1ae08',
          600: '#b78900',
          700: '#8d6800',
          800: '#674c00',
          900: '#443200',
        },
        neutral: {
          50:  '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
