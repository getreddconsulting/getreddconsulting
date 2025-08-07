


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
  'bg-red-600',
  'hover:bg-red-700',
  'bg-white',
  'text-black',
  'hover:text-white',
  'border',
  'border-white',
  'hover:border-red-600',
  'focus:outline-none',
  'rounded-lg',
  'p-2',
  'text-sm',
  'placeholder-white',
  'bg-opacity-30',
  'hover:bg-transparent', // ✅ override unwanted hover:bg
  'active:bg-transparent', // ✅ for active state
  'focus:bg-transparent', // ✅ for focus state (optional)
    'bg-transparent',  
],

  theme: {
    
    extend: {

       fontFamily: {
        body: ['Calibri', 'sans-serif'],
        heading: ['Calibri', 'sans-serif'],
      },
      
       screens: {
     'short': { raw: '(max-height: 780px)' },
     'lt1300': '1350px' ,
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
