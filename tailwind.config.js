/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // xs: "320px",
      // sm: "640px",
      md: "813px",
      lg: "1217px",
      // xl: "1217px",
      "2xl": "1622px",
    },
    extend: {},
  },
  plugins: [],
};
