import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // sets path of root html
  build: {
    outDir: "../dist", // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
  },
});
