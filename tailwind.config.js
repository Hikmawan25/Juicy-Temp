/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        'xs': '320px', // => @media (min-width: 320px) { ... }

        'sm': '640px', // => @media (min-width: 640px) { ... }

        'md': '768px', // => @media (min-width: 768px) { ... }

        'lg': '1024px', // => @media (min-width: 1024px) { ... }

        'xl': '1280px', // => @media (min-width: 1280px) { ... }

        '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        primary: '#918a8b',
        secondary: '#e1e1e1',
        charcoal: '#393837',
        primary_blue: '#0095F6',
        dark_blue: '#113CFC',
        gold: '#FFD700',
        btnprice: '#908A8A',
        btnPrimary: '#393836'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}