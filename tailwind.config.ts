import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070604",
        obsidian: "#0D0A07",
        stone: "#17120C",
        parchment: "#E7D2A2",
        gold: "#C89B3C",
        ember: "#B45F2A",
        steel: "#9BA3A7",
        panel: "rgba(231, 210, 162, 0.07)",
        line: "rgba(231, 210, 162, 0.16)",
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.48)",
        glow: "0 0 80px rgba(200, 155, 60, 0.22)",
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at 18% 18%, rgba(200, 155, 60, 0.18), transparent 32%), radial-gradient(circle at 82% 8%, rgba(180, 95, 42, 0.13), transparent 28%), radial-gradient(circle at 50% 100%, rgba(155, 163, 167, 0.08), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;
