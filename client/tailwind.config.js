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
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out',
      },
      transitionProperty: {
        'slide-up': 'opacity, transform',
      }, 
      colors: {
        'aqua-veil' : 'rgba(46, 196, 182, 0.1)'
      },
      boxShadow: {
        'oblivion': 'rgba(255, 255, 255, 0.3) 0px 4px 8px 5px',
        'midnight': '0 6px 6px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: [],
}