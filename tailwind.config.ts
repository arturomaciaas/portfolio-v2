import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nord color palette
        nord: {
          // Polar Night (backgrounds)
          0: '#2E3440',
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          // Snow Storm (text)
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          // Frost (accents)
          7: '#8FBCBB',
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          // Aurora (highlights)
          11: '#BF616A', // red
          12: '#D08770', // orange
          13: '#EBCB8B', // yellow
          14: '#A3BE8C', // green
          15: '#B48EAD', // purple
        },
      },
    },
  },
  plugins: [],
};
export default config;
