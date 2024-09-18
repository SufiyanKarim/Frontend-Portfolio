/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '4px 4px 10px rgba(0, 0, 0, 0.1)',
        'custom-dark': '8px 8px 15px rgba(0, 0, 0, 0.4)',
        'custom': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
       
      },
    },
  },
  plugins: [],
}

