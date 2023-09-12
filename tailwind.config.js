/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        'back1':"url('./assets/svgs/bghome.png')"
      },
      fontFamily:{
        "SpaceMono":["Space Mono"]
      },
      keyframes: {
        
        blink: {
          "50%": {
            backgroundColor: "transparent"
          },
          "100%": {
            backgroundColor: "white"
          }  
        },
        bounce:{
          "0%":{
            transform:'translateY(-25%)'
          },
          "50%":{
            transform:'translateY(0%)'
          },
          "100%":{
            transform:'translateY(10%)'
          },
        },
        rotateOrbit:{
          "0% , 100%":{
            transform:'rotate(10deg) translateY(0%)',
          },
          "50%":{
            transform:'rotate(360deg) translateY(30%)',
          }
        }

      },
      animation: {
        blink: "blink 1s infinite alternate",
        drone: "bounce 15s infinite alternate",
        orbit: "rotateOrbit 900s infinite alternate",
      }
    },
  },
  plugins: [],
}