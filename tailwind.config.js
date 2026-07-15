/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#0052A3',
          light: '#E6F2FF',
        },
        ink: '#1A1A1A',
        success: '#10B981',
        amber: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
