/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          950: "#101712",
          900: "#17231b",
          800: "#22372a",
          700: "#31533d",
          600: "#3f7550",
          500: "#68a778",
          400: "#9bcaa2",
          100: "#eaf5eb",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 37, 24, 0.08)",
      },
    },
  },
  plugins: [],
};
