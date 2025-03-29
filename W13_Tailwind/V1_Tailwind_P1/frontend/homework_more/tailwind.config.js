/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors : {
        blue : {
          accent : "#002A5A",
          icons : "#063863",
          meet : "#2990FE"
        },
        green : {
          accent : "#3FDFCF",
          separator : "#B1F1EB"
        },
        gray : {
          text : "#949395",
          icons : "#B3B3B5",
          heading : "#F5F7F7",
          profileText : "#989799",
          active : "#E4E9EF"
        },
        red : {
          meet : "#FE6D6D"
        },
        white : {
          bg : "#FAFBFD"
        }
      },
      screens : {
        mid : "500px",
        profile : "523px",
        mobile : "320px",
        se : "548px",
        ss : "320px"
      }
    },
  },
  plugins: [],
}

