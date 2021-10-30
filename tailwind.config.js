module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "sans-serif"],
        sans: ["Open Sans", "helvetica neue"],
      },
      colors: {
        gray: {
          "trib-light": "#F3F3F3",
        },
        brand: '#ffc200',
        green: {
          "trib": '#348094'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
