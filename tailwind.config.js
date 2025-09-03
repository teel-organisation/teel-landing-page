/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      cab: ["Cabinet Grotesk", "sans-serif"],
      inter: ["Inter"],
      mont: ["Montserrat"],
      open: ["Open Sans"],
    },
    extend: {},
  },
  plugins: [],
};