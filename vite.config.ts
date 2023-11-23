import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/text-diff/",
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[folder]__[local]-[hash:8]",
    },
  },
});
