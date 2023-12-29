/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        shrinkAnimation: {
          from: { transform: 'translateX(-50%) scaleX(1)' },
          to: { transform: 'translateX(-50%) scaleX(0)' },
        },
        slideAnimation: {
          from: { transform: 'translateX(-50%) translateY(-500%)' },
          to: { transform: 'translateX(-50%) translateY(0)' },
        },
      },
      animation: {
        'pop-up':
          'slideAnimation 1s ease-in-out 1 forwards, slideAnimation 1s 6s ease-in-out 1 reverse forwards',
        'load-slow': 'shrinkAnimation 5s 1s linear 1 forwards;',
      },
    },
  },
  plugins: [],
};
