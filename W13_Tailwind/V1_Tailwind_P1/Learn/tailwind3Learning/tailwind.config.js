/** @type {import('tailwindcss').Config} */
export default {
  // this content key is very important and can create a bunch of problems : this is where you fill face issues when you create monorepos. This specifies where is your frontend code and where are you gonna use tailwind, the following is what tailwind guide suggested to do the configurations
  // content: ["./src/**/*.{html,js}"],
  content : [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        red : {
          500 : "blue"
        }
      }
    },
  },
  plugins: [],
}

