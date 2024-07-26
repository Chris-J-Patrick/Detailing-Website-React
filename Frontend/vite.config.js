import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable globals
    environment: "jsdom", // Set the test environment to jsdom
    setupFiles: "./src/SetupTests.jsx", // Path to setup file
  },
});
