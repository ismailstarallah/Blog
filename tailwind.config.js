/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('./src/assets/hero_image.jpeg')",
      //   // 'footer-texture': "url('/img/footer-texture.png')", ../assets/hero_image.jpeg
      // },
      fontFamily: {
        'inria-serif': ['"Inria Serif"', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

