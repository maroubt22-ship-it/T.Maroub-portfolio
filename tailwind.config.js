/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f2',
          100: '#d9ede0',
          200: '#b3dac2',
          300: '#7dc09a',
          400: '#4ea275',
          500: '#2e8555',
          600: '#1f6b42',
          700: '#185636',
          800: '#14432b',
          900: '#0e3020',
          950: '#071a11',
        },
        earth: {
          50:  '#fdf8f3',
          100: '#f8eddf',
          200: '#f0d8bc',
          300: '#e4bc90',
          400: '#d49862',
          500: '#c47c42',
          600: '#a66135',
          700: '#884d2c',
          800: '#6b3c24',
          900: '#4e2d1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
