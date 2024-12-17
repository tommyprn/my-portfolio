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
        gray25: "#404040",
        hunyadi: "#DE9E36",
        "dark-blue": "#121315",
        "pale-peach": "#fff7e0",
        "dutch-white": "#E4DEB9",
        "dark-vanilla": "#C6C1A0",
        "pale-peach-800": "#fff7e0cc",
        "pale-peach-700": "#fff7e0b3",
        "pale-peach-600": "#fff7e099",
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
