import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "terminal-cursor": "terminal-cursor 1s infinite",
        "circular-first": "circular-first 30s infinite linear",
        "circular-second": "circular-second 100s infinite linear",
        "circular-third": "circular-third 200s infinite linear",
        "circular-fourth": "circular-fourth 300s infinite linear",
      },
      keyframes: {
        "terminal-cursor": {
          "0%": { opacity: "1" },
          "49.9%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "circular-first": {
          "0%": {
            transform: "rotate(-45deg) translateY(1210%)",
          },
          "100%": {
            transform: "rotate(315deg) translateY(1210%)",
          },
        },
        "circular-second": {
          "0%": {
            transform: "rotate(-30deg) translateX(1345%)",
          },
          "100%": {
            transform: "rotate(330deg) translateX(1345%)",
          },
        },
        "circular-third": {
          "0%": {
            transform: "rotate(-100deg) translateY(-975%)",
          },
          "100%": {
            transform: "rotate(260deg) translateY(-975%)",
          },
        },
        "circular-fourth": {
          "0%": {
            transform: "rotate(-135deg) translateX(-2600%)",
          },
          "100%": {
            transform: "rotate(225deg) translateX(-2600%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
