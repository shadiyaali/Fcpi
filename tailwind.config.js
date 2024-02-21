/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-background': "url('/src/assets/images/bg.png')",
        'cover-background': "url('/src/assets/images/Ellipse 1977.png')",
        'card1-background': "url('/src/assets/images/image1.png')",
        'card2-background': "url('/src/assets/images/Rectangle 1.svg')",
        'card3-background': "url('/src/assets/images/event.png')",

     
      },
    // colors :{
    //   'gradient-color': "linear-gradient(to right, #FAF1A7, #F6EBCE)",  
    // }  
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

