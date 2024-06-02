/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '11px 19px 34px -9px rgba(0,95,163,0.6)',
      },
      colors: {
        customGray: 'rgb(109, 197, 209)',
        darkblue:'#39625A',
        navbar:'rgb(253, 228, 158)',
        navbar1:'rgb(254, 185, 65)',
        hard:'rgb(221, 118, 28)'
      },
      borderRadius: {
        '20p': '20%',
      },
      boxShadow: {
        'hard': '10px 10px 0px 0px rgba(0,95,163,0.4)',
      },

    },
  },
  plugins: [],
}
