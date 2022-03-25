module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-s': '320px',
        'mobile-l': '425px',
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'), require('tailwindcss-children') ],
}
