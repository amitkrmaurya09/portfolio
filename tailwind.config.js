
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 2s ease-out',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
          '60%': {
            transform: 'translateY(-15px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
