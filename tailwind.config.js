/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        "sage-green": "#c0d0c2",
        "dark-green": "#343a35",
        "forest-green": "#14642B"
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
