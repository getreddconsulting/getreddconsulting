import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ✅ matches the repo name on GitHub
  plugins: [react()],
});
