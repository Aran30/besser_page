/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e88e5',
          dark: '#0d47a1',
          light: '#64b5f6',
          accent: '#00bcd4',
          ink: '#0b1a2b',
          slate: '#445566',
          surface: '#f5f8fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(13, 71, 161, 0.18)',
      },
    },
  },
  plugins: [],
}
