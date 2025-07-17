


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {

       fontFamily: {
        body: ['Calibri', 'sans-serif'],
        heading: ['Calibri', 'sans-serif'],
      },
      
       screens: {
     'lt1300': { max: '1299px' },
    },
      keyframes: {
        "line-draw": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
         glow: {
          '0%, 100%': { boxShadow: '0 0 0px red' },
          '50%': { boxShadow: '0 0 15px red' },
        },
      },
     animation: {
  "line-draw": "line-draw 1s ease-out forwards",
  "line-draw-loop": "line-draw 1s ease-out infinite", // ✅ runs forever
   glow: 'glow 2s infinite ease-in-out',
},

      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [],
};
