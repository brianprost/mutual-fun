const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "mf-gold": "#ddc385",
        "mf-blue": "#003049",
      },
      fontFamily: {
        belleza: ["'Belleza'", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
