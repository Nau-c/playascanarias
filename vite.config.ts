import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 👈 necesario para el alias

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 resuelve `@/` como `src/`
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
