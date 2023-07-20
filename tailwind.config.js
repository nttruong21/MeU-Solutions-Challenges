/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat, sans-serif'
      },
      colors: {
        primary: '#291507'
      },
      backgroundColor: {
        primary: '#050709',
        secondary: '#E3E1DC',
        tertiary: '#291507'
      },
      borderColor: {
        primary: '#291507'
      },
      placeholderColor: {
        primary: '#291507'
      },
      boxShadow: {
        primary: '0px 1px 4px 1px'
      }
    }
  },
  plugins: []
}
