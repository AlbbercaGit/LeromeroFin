const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|calendar|image|input|pagination|select|ripple|spinner|listbox|divider|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playfair Display', 'sans-serif'],
        zeyada: ['Zeyada', 'cursive'], // Añade esta línea
      },
      backgroundImage: {
        // 'botom': "url('./im1.png')",
        // 'topom': "url('./im2.png')",
      }
    },
  },
  plugins: [nextui()],
}
