/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'heebo': 'var(--font-family-heebo)'
      },
      borderRadius: {
        '40':'40px'
      },
      backgroundColor:{
        'black-tpm': '#444444'
      },
      borderColor:{
        'black-tpm': '#444444'
      }
    },
  },
  plugins: [],
}
