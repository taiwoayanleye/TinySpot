/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#EF5844",
        "secondary-orange": "#FBF3EC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
