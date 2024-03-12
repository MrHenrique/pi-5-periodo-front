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
      grey: '#ddd',
      dark: '#1e293b',
      'dark-alt': '#334155',
      light: '#f1f5f9'
    }
  },
  plugins: [formsPlugin]
}
