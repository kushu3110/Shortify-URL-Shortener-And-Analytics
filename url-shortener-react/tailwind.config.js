/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Keep gradients VERY subtle or almost flat
        "custom-gradient": "linear-gradient(to right, #1a73e8, #1a73e8)", 
        "custom-gradient-2": "linear-gradient(to right, #f1f3f4, #f1f3f4)",
        "card-gradient": "linear-gradient(to right, #ffffff, #ffffff)",
      },

      colors: {
        // Google palette
        navbarColor: "#ffffff",   // white navbar
        btnColor: "#1a73e8",      // Google blue
        linkColor: "#1a73e8",     // same blue
      },

      boxShadow: {
        // Google-style soft elevation
        custom: "0 1px 3px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06)",
        right: "2px 0px 6px rgba(0,0,0,0.08)",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // very Google-like
        montserrat: ["Montserrat"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};