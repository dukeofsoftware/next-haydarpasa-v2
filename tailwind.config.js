/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#990A0F',
          2: '#FFF4EF',
          3: '#ba0d13',
          4: '#BB8378',
          5: '#70070c',
          6: '#FF8198',
          7: '#FFB7C5',
        },
        secondary: {},
        accent: '#0B9930',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
