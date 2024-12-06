/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "#333333",
        gold: "#DEB841",
        hunyadi: "#DE9E36",
        "dark-blue": "#121315",
      },
      boxShadow: {
        "elevation-1": [
          "0px 2px 6px 2px rgba(64, 72, 79, 0.12)",
        ],
        "elevation-2": [
          "0px 4px 12px 2px rgba(64, 72, 79, 0.12)",
        ],
      },
    },
  },
  plugins: [],
};
