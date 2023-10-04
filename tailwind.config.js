/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        "home-bg": "#E6DDD5",
        "grey-bg" :"#2F2F2F",
        "green-btn" : "#74CE8C",
        "orange-bg" : "#FFCC6D",
        "pink-bg" : "#FD9F77",
        "nav-bg" : "#F6F1EF",
        "text" : "#0E0E0E",
      },

      fontFamily: {
        dmsans: ["Dm Sans", "sans-serif"],
        montserrat : ["Montserrat", "sans-seerif"],
        grotesque: ['Bricolage Grotesque', 'sans-serif'],
      },

      content: {
        break: "url(./assets/bg.png)",
      },
    },
    
    screens: {
      'xs': '480px',
      'sm': '768px',  
      'md': '1060px',  
    }
  },
  
  plugins: [],
}