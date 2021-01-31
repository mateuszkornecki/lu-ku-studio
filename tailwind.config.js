module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    maxWidth: {
      "65p": "65%",
    },
    extend: {
      animation: {
        "show-content": "showContent 1000ms forwards 1000ms",
      },
      keyframes: {
        showContent: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            visibility: "visible",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
