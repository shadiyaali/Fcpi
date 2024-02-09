/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-background': "url('/src/assets/images/bg.png')",
        'cover-background': "url('/src/assets/images/Ellipse 1977.png')",
        'card1-background': "url('/src/assets/images/image1.png')",
      },
      backgroundColor:{
        'custom-blue': 'rgba(197, 229, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

