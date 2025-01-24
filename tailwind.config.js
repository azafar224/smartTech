/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        // Custom animations
        "slide-in-down": "slideInDown 0.5s ease-out",
        text: "text 3s ease infinite",
        infiniteScroll: "infiniteScroll 25s linear infinite",
        infiniteScrollReverse: "infiniteScrollReverse 25s linear infinite",
      },
      keyframes: {
        // Keyframes for sliding in from top
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        // Keyframes for text animation
        text: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Keyframes for infinite scrolling
        infiniteScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        // Keyframes for reverse infinite scrolling
        infiniteScrollReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
