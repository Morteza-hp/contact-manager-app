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
      colors: {
        Background: "#282A36",
        CurrentLine: "#44475A",
        Foreground: "#F8F8F2",
        Comment: "#6272A4",
        Cyan: "#8BE9FD",
        Green: "#50FA7B",
        Orange: "#FFB86C",
        Pink: "#FF79C6",
        Purple: "#BD93F9",
        Red: "#FF5555",
        Yellow: "#F1FA8C",
      },
    },
  },
  plugins: [],
};
export default config;
