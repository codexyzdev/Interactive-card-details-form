/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      RedInputErrors: "hsl(0, 100%, 66%)",
      LightGrayishViolet: "hsl(270, 3%, 87%)",
      DarkGrayishViolet: "hsl(279, 6%, 55%)",
      VeryDarkViolet: "hsl(278, 68%, 11%)",
      white: "hsl(0, 0%, 100%)",
      l: "hsl(249, 99%, 64%)",
      r: "hsl(278, 94%, 30%)",
    },
  },
  plugins: [],
};
