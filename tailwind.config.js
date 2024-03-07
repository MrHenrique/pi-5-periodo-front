/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [formsPlugin]
}