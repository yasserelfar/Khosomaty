import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  // when deploying to GitHub Pages, set base to "/<REPO_NAME>/"
  base: process.env.NODE_ENV === "production" ? "/<REPO_NAME>/" : "/",
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // مهم جدًا
    },
  },
});
