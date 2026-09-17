/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F6F5",
        ink: "#1E2523",
        primary: {
          DEFAULT: "#1B4F4F",
          dark: "#123838",
          light: "#DCEEEC",
        },
        accent: {
          DEFAULT: "#E8A33D",
          dark: "#C97F1E",
        },
        line: "#C9D8D5",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
