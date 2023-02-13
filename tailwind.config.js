/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headerText: ["24px", "28.8px"],
        drawerText: ["16.8px", "22.8px"],
        resumeTitle: ["20px", "32px"],
        resumeSubTitle: ["16px", "24px"],
        resumeContent: ["12px", "24px"],
        footerText: ["22.8px", "26.8px"],
      },
      screens: {
        xxxs: { min: "320px", max: "375px" },
        xxs: { min: "375px", max: "480px" },
        xs: { min: "480px", max: "640px" },
        phonexxs: { min: "320px", max: "360px" },
        phonexs: { min: "360px", max: "400px" },
        phonebase: { min: "400px", max: "425px" },
        phonesm: { min: "425px", max: "480px" },
        phonemd: { min: "480px", max: "540px" },
        phonelg: { min: "540px", max: "640px" },
      },
    },
  },
  plugins: [],
};
