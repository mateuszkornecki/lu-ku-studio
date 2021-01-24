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
        "slide-content": "slideContent 1s forwards",
        "slide-title": "slideTitle 1s forwards",
      },
      keyframes: {
        slideContent: {
          "100%": { bottom: "2rem" },
        },
        slideTitle: {
          "100%": { bottom: "30%" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
