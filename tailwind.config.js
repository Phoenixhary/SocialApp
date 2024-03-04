/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".scrollbar-none" : {
          scrollbarDisplay: "none"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            width: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-track" : {
              border:"1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive"])
    }
  ],
}

