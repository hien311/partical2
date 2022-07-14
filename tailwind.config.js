module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray3: "#828282",
      },
      fontSize: {
        large: "80px",
        medium: "72px",
      },
    },
  },
  plugins: [],
};
