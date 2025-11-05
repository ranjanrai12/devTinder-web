import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // remote setup
      // "/api": {
      //   target: "http://63.177.97.113",
      // },

      // local setup
      '/api': {
        target:'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
  },
  plugins: [react(), tailwindcss()],
});
