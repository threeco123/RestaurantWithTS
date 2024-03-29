/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DC071',
        secondary: '#A4D96C',
        grayDark: '#292D32',
        grayLight: '#E7ECF3',
        blue: '#316BFF',
        darkCyan: '#00B4AA',
        tertiary: '#3A1097',
        accent: '#00D1ED',
        grayF3: '#F3EDFF',
        gray6B: '#6B6B6B',
        gray23: '#232323',
        gray4b: '#4B5264',
        grayf1: '#F1F1F3',
        gray80: '#808191',
        black: '#171725',
      },
      gridTemplateColumns: {
        sidebar: '300px minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
};
