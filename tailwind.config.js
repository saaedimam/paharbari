/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        // Primary - green shades
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bbe3c0',
          300: '#92d09b',
          400: '#68b874',
          500: '#4a9b57',
          600: '#3a7f44',
          700: '#306539',
          800: '#295130',
          900: '#224429',
          950: '#0f2613',
        },
        // Secondary - earthy brown
        earth: {
          50: '#f9f6f1',
          100: '#f0e9dc',
          200: '#e2d3b9',
          300: '#d1b78e',
          400: '#c09b6b',
          500: '#b1864f',
          600: '#9c7341',
          700: '#815d38',
          800: '#6b4c32',
          900: '#5a402e',
          950: '#342218',
        },
        // Accent - amber for warmth
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg')",
        'eco-escape': "url('https://images.pexels.com/photos/3778930/pexels-photo-3778930.jpeg')",
        'bee-hive': "url('https://images.pexels.com/photos/8474477/pexels-photo-8474477.jpeg')",
      },
    },
  },
  plugins: [],
};