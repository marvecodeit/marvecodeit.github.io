import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The site is published at https://marvecodeit.github.io/airlink/ from the
// marvecodeit.github.io repository, so every generated asset URL must include
// the /airlink/ prefix.
export default defineConfig({
  base: "/airlink/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
