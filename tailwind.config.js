/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#9775FA",
        dark: "#1D1E20",
        gray: "#8F959E",
        grayBackground: "#F5F6FA",
        error: "#EA4335",
      },
    },
  },
  plugins: [],
};
