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
      fontSize: {
        'fluid-lg': 'clamp(2.5rem, 5vw, 5rem)',
        'fluid-sm': 'clamp(1rem, 1.1vw, 1.1rem)'
      },
      keyframes: {
        'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        bounce: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-30px)'},
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out',
        'bounce': 'bounce 2s infinite ease-in-out'
      },
      transitionProperty: {
        'slide-up': 'opacity, transform',
      }, 
      colors: {
        'aqua-veil' : 'rgba(46, 196, 182, 0.1)',
        'sea-blue': '#61828A'
      },
      boxShadow: {
        'oblivion': 'rgba(255, 255, 255, 0.3) 0px 4px 8px 5px',
        'midnight': '0 6px 6px rgba(0, 0, 0, 0.5)',
        'cloud': 'rgba(255, 255, 255, 0.3) 0px 4px 8px 3px',
        'text': '3px 3px 5px rgba(0, 0, 0, 0.5)'
      }, 
      padding: {
        'section': '96px 36px'
      }
    }
  },
  plugins: [],
}