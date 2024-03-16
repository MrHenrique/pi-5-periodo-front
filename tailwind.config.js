/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#4ade80',
      'primary-alt': '#22c55e',
      dark: '#212529',
      'dark-alt': '#343a40',
      'darker-grey': '#495057',
      light: '#f8f9fa',
      'light-alt': '#e9ecef',
      grey: '#dee2e6'
    }
  },
  plugins: [formsPlugin]
}
