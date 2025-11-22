/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'codecademy-blue': '#1F3A5F',
        'codecademy-purple': '#6C63FF',
      },
    },
  },
  plugins: [],
}

