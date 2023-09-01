/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      // poppins: ['"Poppins"', "sans-serif"],
      // },
      colors: {
        primary: "#A2BD69",
        "primary-dark": "#869D56",
        "primary-light": "#F6F8F0",
        "font-dark": "#666666",
        "font-gray-1": "#727272",
        error: "#ED6856",
        border: "#E6E6E6",
        // border: "#EAEAEA",
        // border: "#D7DAE2",
      },
      backgroundImage: {
        "hero-image": "url('./Image/home_banner5.jpg')",
      },
      boxShadow: {
        fixed: "0 -8px 15px -15px rgba(0,0,0,0.2)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        // sm: "2rem",
        md: "3.5rem",
        lg: "4rem",
        xl: "4.5rem",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
