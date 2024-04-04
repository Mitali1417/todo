/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8b195",
        warmPink: "#f67280",
        coolPink: "#c06c84",
        coolPurple: "#6c5b7b",
        Blue: "#355c7d",
        primary: "#195756",
        secondary: "#32aeac",
        tertiary: "#3FD9D7",
      },
    },
    screens: {
      xs: "240px",
      ss: "375px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    fontFamily: {
      Mons: "Montserrat Alternates, sans-serif",
      Kalnia: "Kalnia, serif",
      DM: "DM Serif Display, serif",
      DS: "Dancing Script, cursive",
      Quicks: "Quicksand, sans-serif",
      DMs: "DM Sans, sans-serif",
      Inter: "Inter, sans-serif",
    },
  },
  plugins: [],
};
