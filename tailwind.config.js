const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "mutual-fun": "url('./public/img/mutual-fun-background.webp'",
      }),
      fontFamily: {
        belleza: ["'Belleza'", ...defaultTheme.fontFamily.sans],
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
