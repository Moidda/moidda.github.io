/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Add custom colors to match your design
      colors: {
        'portfolio-brown': '#c39b8f',
        'sidebar-black': '#1c1c1d',
        'url-gray': '#5b6366',
      }
    },
  },
  plugins: [],
}
