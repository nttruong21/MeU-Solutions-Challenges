/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'Raleway, sans-serif'
      },
      colors: {
        primary: 'rgba(231, 231, 235, 1)',
        secondary: 'rgba(160, 159, 177, 1)',
        tertiary: 'rgba(136, 134, 157, 1)',
        quaternary: 'rgba(17, 14, 60, 1)',
        icon: 'rgba(97, 100, 117, 1)'
      },
      backgroundColor: {
        primary: 'rgba(30, 33, 58, 1)',
        secondary: 'rgba(16, 14, 29, 1)',
        tertiary: 'rgb(98, 100, 117)',
        'button-primary': 'rgba(110, 112, 122, 1)',
        'button-secondary': 'rgba(231, 231, 235, 1)',
        'button-tertiary': 'rgba(88, 86, 118, 1)',
        progress: 'rgba(255, 236, 101, 1)'
      },
      width: {
        sidebar: '450px'
      },
      spacing: {
        'except-sidebar': '400px'
      },
      borderColor: {
        input: 'rgba(231, 231, 235, 1)',
        primary: 'rgba(97, 100, 117, 1)'
      },
      placeholderColor: {
        primary: 'rgba(97, 100, 117, 1)'
      }
    }
  },
  plugins: []
}
