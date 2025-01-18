import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1e1e1e",
        gray: {
          "100": "#7a7a7a",
          "200": "#797979",
          "300": "#121212",
        },
        white: "#fff",
        darkorange: {
          "100": "#fd6f00",
          "200": "#fd6f0099",
        },
        orangered: "#e35700",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#edecec",
        },
        darkgray: "#afafaf",
        gainsboro: {
          "100": "#dedede",
          "200": "#d9d9d9",
        },
        black: "#000",
        darkslategray: "#424242",
        antiquewhite: "#ffebdb",
        dimgray: "#545454",
        snow: "#fff8f8",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        sm: "14px",
        xs: "5px",
      },
    },
    fontSize: {
      sm: "14px",
      md: "17px",
      lg: "19px",
      xl: "21px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "38px",
      "5xl": "52px",
      "6xl": "65px",
      "7xl": "100px",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      xl: "1440px",
      "2xl": "1920px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
