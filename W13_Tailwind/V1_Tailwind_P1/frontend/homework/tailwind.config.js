/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        blue : {
          dark : "#002A5B",
          faded : "#19406B",
          grey  : "#7F95AC",
          lessFaded : "#234871"

        },
        green : {
          accent : "#36C4BD"
        },
        gray : {
          write : "#748CA5",
          box : "#7F95AC"
        }
      }
    },
  },
  plugins: [],
}

