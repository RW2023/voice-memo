import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Import DaisyUI using ES module syntax

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class", // Enable dark mode using classes
  plugins: [daisyui], // Use the imported DaisyUI plugin
  daisyui: {
    themes: true, // Enable all themes
  },
} satisfies Config;
