/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3498db",
          secondary: "#2ecc71",
          accent: "#e74c3c",
          neutral: "#95a5a6",
          highlight: "#f39c12",
          shadow: "#FB7185",
          dark:"#2D3748"
        },
      },
      "light",
    ],
  },
  theme: {
    fontFamily: {
      teko: ["Teko", "Exo", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        accent: "#e74c3c",
        neutral: "#95a5a6",
        highlight: "#f39c12",
        shadow: "#FB7185",
        dark:"#2D3748"
      },
    },
  },
  plugins: [require("daisyui")],
};
