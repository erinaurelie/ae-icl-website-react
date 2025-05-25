/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.625rem, 0.466rem + 0.795vw, 1.063rem)'
      }
    }
  },
  plugins: [],
}