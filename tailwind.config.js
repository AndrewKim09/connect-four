/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
      {colors: {
        darkPurple: "#5C2DD5",
        lightPurple: "#7945FF",
        redPlayer: "#FD6687",
        yellowPlayer: "#FFCE67"
      },

      fontSize: {
        HeadingLg: ["56px", {
          lineHeight: "71px",
          fontWeight: "bold"
        }],
        HeadingMd: ["24px", {
          lineHeight: "31px",
          fontWeight: "bold"
        }],
        HeadingSm: ["20px", {
          lineHeight: "26px",
          fontWeight: "bold"
        }],
        HeadingXs: ["16px", {
          lineHeight: "21px",
          fontWeight: "bold"
        }],

        paragraph: ["16px", {
          lineHeight: "21px",
          fontWeight: "medium",
        }],
      }
    },},
  plugins: [],
}

