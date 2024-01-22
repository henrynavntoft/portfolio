/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#EAE9E7",
            foreground: "#201E1F",
            primary: "#78933D",
          },
        },
        dark: {
          colors: {
            background: "#1A1A1A",
            foreground: "#EAE9E7",
            primary: "#78933D",
          },
        },
      },
    }),
  ],
};
