import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/taila-site/",
  plugins: [react(), {name: "pages-no-jekyll", generateBundle() {
    this.emitFile({type: "asset", fileName: ".nojekyll", source: ""});
  }}],
  server: {allowedHosts: ["terminal.local"]},
  build: {outDir: "docs", emptyOutDir: true},
});
