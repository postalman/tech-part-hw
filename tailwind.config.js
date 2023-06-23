/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 3.4369285106658936px 2.5776965618133545px 0px #FBF8FF inset, 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06), 0px -1.7184642553329468px 3.4369285106658936px 0px #AE7BE3 inset",
        custom2:
          "-2.57769656px 6.87385702px 20.62157249px 0px rgba(0,0,0,0.23)",
      },
    },
  },
  plugins: [],
};
