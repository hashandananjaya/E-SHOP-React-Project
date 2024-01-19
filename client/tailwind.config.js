/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#afc456',
        based: '#f34567',
      },
      fontFamily: {
        heebo700: ('Josefin Sans')
      }
    },
  },
  plugins: [],
}
 
