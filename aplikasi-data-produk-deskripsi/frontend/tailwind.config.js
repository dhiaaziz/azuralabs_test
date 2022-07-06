// /** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        'light-blue': colors.lightBlue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
