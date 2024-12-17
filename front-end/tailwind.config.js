/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dcdcdc",
        white: "FFFFFF",
        brand: "#9333EA"
      }
    },
  },
  plugins: [],
};
