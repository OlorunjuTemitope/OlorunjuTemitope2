/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f3f4f6",
        darkcyan: "#1c8f78",
        lightseagreen: "#36a891",
        black: "#000",
        gray: "#101010",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "pp-hatton": "'PP Hatton'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
