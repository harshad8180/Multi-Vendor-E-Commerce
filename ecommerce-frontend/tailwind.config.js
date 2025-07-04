/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": '#91e041',
        "secondary-color": '#eaf0f1',
        "dark-color": '#0a3d62',
      },
    },
  },
  plugins: [],
}

